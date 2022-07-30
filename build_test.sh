VERSION=$1


if [ -z "${VERSION}" ]
then
       echo "Please enter version"
      exit
fi

cp .env.test .env
docker build -f Dockerfile.static -t tuniver_test -t asia-southeast1-docker.pkg.dev/tuniver/tuniver-repo/tuniver-front-end-2-test:${VERSION} .
docker push asia-southeast1-docker.pkg.dev/tuniver/tuniver-repo/tuniver-front-end-2-test:${VERSION}
#gcloud run deploy tuniver-front-end-test --region=asia-southeast1 --port=80 --cpu=1 --memory=1G --max-instances=1 --min-instances=1 --image=asia-southeast1-docker.pkg.dev/tuniver/tuniver-repo/tuniver-front-end-2-test:${VERSION}
