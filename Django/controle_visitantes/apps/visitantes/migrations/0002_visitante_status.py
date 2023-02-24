# Generated by Django 3.2.12 on 2022-03-17 14:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visitantes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='visitante',
            name='status',
            field=models.CharField(choices=[('AGUARDANDO', 'Aguardando autorização'), ('EM_VISITA', 'Em visita'), ('FINALIZANDO', 'Visita finalizada')], default='AGUARDANDO', max_length=11, verbose_name='Status'),
        ),
    ]