from rest_framework import serializers
from .models import User, Publication


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class PublicationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Publication
        fields = '__all__'

    def to_representation(self, instance):
        print("to_representation")
        self.fields['student'] = UserSerializer(read_only=False)
        return super(PublicationSerializer, self).to_representation(instance)

