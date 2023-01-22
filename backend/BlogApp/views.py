from django.shortcuts import render
from rest_framework.response import Response 
from rest_framework import permissions
from rest_framework.views import APIView 
from rest_framework.generics import ListAPIView, RetrieveAPIView 
from .models import BlogPost
from .serializers import BlogPostSerializer


#BlogpostList view class --> setting lookup_field to 'slug'
class BlogPostListView(ListAPIView):
    queryset = BlogPost.publishedblog.all()
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.AllowAny]

#BlogpostFeatured view
class BlogPostFeaturedView(ListAPIView):
    queryset = BlogPost.featuredblog.all()
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.AllowAny]

#BlogpostDetail view class --> setting lookup_field 'slug'
class BlogPostDetailView(RetrieveAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.AllowAny]

