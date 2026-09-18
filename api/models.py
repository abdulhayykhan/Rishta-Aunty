import os
import json
import urllib.request
import urllib.error
from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        api_key = os.getenv("GROQ_API_KEY") or os.getenv("GROQ_KEY") or os.getenv("GROQ_API_TOKEN") or os.getenv("GROQ_API")
        if api_key:
            api_key = api_key.strip().strip("'\"")

        if not api_key:
            self.send_response(400)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Missing GROQ_API_KEY"}).encode("utf-8"))
            return

        req = urllib.request.Request(
            "https://api.groq.com/openai/v1/models",
            headers={"Authorization": f"Bearer {api_key}"}
        )
        try:
            with urllib.request.urlopen(req, timeout=8) as resp:
                data = resp.read()
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(data)
        except urllib.error.HTTPError as he:
            err_body = he.read().decode("utf-8", errors="ignore")
            self.send_response(he.code)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps({"http_error": he.code, "detail": err_body}).encode("utf-8"))
        except Exception as e:
            self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
