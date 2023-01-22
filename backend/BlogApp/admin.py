from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin #importing summernote
from .models import BlogPost


# apply summernote to conent field on BlogPost
class BlogPostAdmin(SummernoteModelAdmin):  
    summernote_fields = 'content'
    list_display = ['title','created_by','status','created']
    prepopulated_fields = {'slug':('title','category',)} # prepopulated field for blogs


admin.site.register(BlogPost, BlogPostAdmin)