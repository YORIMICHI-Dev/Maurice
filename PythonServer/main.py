"""Fast API main root."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import route_tripo_sr

app = FastAPI()
app.include_router(route_tripo_sr.route)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5000"],
    allow_credentials=True,
    allow_methods=[""],
    allow_headers=[""],
)


@app.get("/")
def root() -> None:
    """Root Get Method."""
    return {"Hello": "World"}
