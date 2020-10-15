from django.db import migrations
from api.user.models import CustomUser

class Migration(migrations.Migration):
    def seed_data(apps,schema_editor):
        user = CustomUser(name="chand",
                            email="chandrashanmugam007@gmail.com",
                            is_staff=True,
                            is_superuser=True,
                            phone=9360740964,
                            gender="Male"
                            )

        user.set_password("chandramohan31052007")
        user.save()    

    dependencies = [
        
    ]
    operations = [
        migrations.RunPython(seed_data),
    ]