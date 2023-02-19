from fastapi import APIRouter

v1_router = APIRouter(prefix='/api/v1', tags=["v1"])

@v1_router.get("/test")
async def get_msg():
    """
    routing test
    """
    return {"test": "THIS IS V1 ROUTER"}