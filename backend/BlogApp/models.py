from django.db import models
from datetime import date  
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify 

today= date.today()

Category_Choices = (
    ('Tech', 'Tech'),
    ('Fashion', 'Fashion'),
    ('Entertainment', 'Entertainment'),
    ('Politics', 'Politics'),
    ('Others', 'Others'),
)

Status = (  
    ('Draft','Draft'),
    ('Publish','Publish')
)

#BlogPost class 
class BlogPost(models.Model):

    # custom manager for published post 
    class PublishedBlog(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='Publish').order_by('-created')

    # custom manager for featured post 
    class FeaturedBlog(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='Publish',featured=True).order_by('-created')

    title = models.CharField(max_length=50 , null=False, blank=False)
    slug = models.SlugField()
    preface = models.CharField(max_length=150, null=True, blank=True)
    category = models.CharField(max_length=50, choices=Category_Choices,
                default='Tech')
    image = models.ImageField(upload_to=f"photos/{today}", null=True, blank=True)
    content = models.TextField()
    status = models.CharField(max_length=20, choices=Status, default='Publish')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    featured = models.BooleanField(default=False)
    created = models.DateField(auto_now_add=True)
    objects = models.Manager() # default model manager 
    publishedblog = PublishedBlog() # published blog manager 
    featuredblog = FeaturedBlog() # featured blog manager 


    class Meta:
        ordering = ['-created']
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(BlogPost, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.title}"


