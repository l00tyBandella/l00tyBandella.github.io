from fastapi import FastAPI
from products import router as products_router
from orders import router as orders_router
from content import router as content_router
from creators import router as creators_router
from digital_products import router as digital_products_router

app = FastAPI()

app.include_router(products_router)
app.include_router(orders_router)
app.include_router(content_router)
app.include_router(creators_router)
app.include_router(digital_products_router)
