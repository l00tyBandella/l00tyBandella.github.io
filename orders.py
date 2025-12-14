# Order processing for Bandella Looty
from fastapi import APIRouter

router = APIRouter()

@router.post('/orders')
def create_order(order: dict):
    return {"status": "Order received", "order": order}
