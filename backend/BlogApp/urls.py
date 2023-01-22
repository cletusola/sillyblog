from django.urls import path,include,re_path
from django.conf import settings
from django.views.generic import TemplateView
from django.conf.urls.static import static
from .views import (BlogPostListView,
                    BlogPostDetailView,
                    BlogPostFeaturedView,
                    )


urlpatterns = [
    path('',BlogPostListView.as_view(), name='index'),
    path('featured/',BlogPostFeaturedView.as_view()),
    path('<slug>/',BlogPostDetailView.as_view()),
    path('api-auth/', include('rest_framework.urls')),
    path('summernote/', include('django_summernote.urls')),
    
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
