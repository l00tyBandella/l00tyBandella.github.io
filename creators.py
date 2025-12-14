# Creator profile and subscription management
from fastapi import APIRouter

router = APIRouter()

@router.get('/creators')
def list_creators():
    return [{"id": 1, "name": "Sample Creator", "bio": "Digital artist"}]

@router.get('/creators/{creator_id}/content')
def get_creator_content(creator_id: int):
    # In production, check subscription status
    return [{"id": 1, "title": "Exclusive Art", "type": "image", "price": 9.99}]
