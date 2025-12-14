# Content publishing for Bandella Looty
from fastapi import APIRouter

router = APIRouter()

@router.get('/content')
def list_content():
    return [{"id": 1, "title": "Welcome to Bandella Looty Blog", "type": "blog"}]
