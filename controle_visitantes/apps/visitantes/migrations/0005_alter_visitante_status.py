# Generated by Django 3.2.12 on 2022-08-10 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visitantes', '0004_alter_visitante_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='visitante',
            name='status',
            field=models.CharField(choices=[('AGUARDANDO', 'Aguardando autorização'), ('EM_VISITA', 'Em visita'), ('FINALIZADO', 'Visita finalizada')], default='AGUARDANDO', max_length=11, verbose_name='Status'),
        ),
    ]
