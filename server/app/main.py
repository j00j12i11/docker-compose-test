from fastapi import FastAPI
from pydantic import BaseModel

from v1.api import v1_router

app = FastAPI()
app.include_router(v1_router)

class Item(BaseModel):
    name: str
    nickname: str

@app.get("/api")
def read_root():
    """_summary_

    Returns:
        _type_: _description_
    """
    return {"hello": "Hello World!"}

@app.get("/api/hi")
async def hello():
    return {"msg": "Hello React"}

@app.post("/api/submit")
async def submit(item: Item):
    print(item)
    return {"status": 200}