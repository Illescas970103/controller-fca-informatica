FROM maven:3.8.1-openjdk-17 as builder

WORKDIR /app

# Copiar archivos del proyecto
COPY backend/pom.xml ./pom.xml
COPY backend/src ./src

# Compilar
RUN mvn clean package -DskipTests

# Imagen final
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copiar JAR compilado
COPY --from=builder /app/target/my-vite-spring-app-1.0-SNAPSHOT.jar app.jar

# Exponer puerto
EXPOSE 8080

# Comando de inicio
ENTRYPOINT ["java", "-jar", "app.jar"]
