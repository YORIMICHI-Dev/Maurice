"""TripoSR Route."""

from fastapi import APIRouter

route = APIRouter(
    prefix="/api",
    tags=["Tripo SR"],
)


@route.post("/create-3dmodel-with-tripo-sr")
def create_3d_model_with_tripo_sr() -> dict:
    """Create 3D model with TripoSR."""
    return {
        "model": None,
    }
