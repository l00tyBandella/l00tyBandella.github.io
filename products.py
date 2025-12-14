# Product management for Bandella Looty
from fastapi import APIRouter

router = APIRouter()

@router.get('/products')
def list_products():
    return [{"id": 1, "name": "Sample Product", "price": 19.99}]
