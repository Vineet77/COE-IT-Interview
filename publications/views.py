from django.shortcuts import render
from .models import User, Publication
from .serializers import UserSerializer, PublicationSerializer
from rest_framework import viewsets


# Create your views here.
# /user, GET - query db, POST post db
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by("id")
    serializer_class = UserSerializer


class PublicationViewSet(viewsets.ModelViewSet):
    queryset = Publication.objects.all().order_by('id')
    serializer_class = PublicationSerializer
