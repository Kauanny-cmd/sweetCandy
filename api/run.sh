mvn clean package -DskipTests && cp target/api-0.0.1-SNAPSHOT.jar ./docker/app/app.jar

cd docker && docker-compose up --build -d && cd ..
