# Digital product management
from fastapi import APIRouter

router = APIRouter()

@router.get('/digital-products')
def list_digital_products():
    return [{"id": 1, "title": "Ebook: How to Create", "price": 14.99, "file_url": "/files/ebook.pdf"}]
