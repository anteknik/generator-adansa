### Authorization Server ###

1. Run the application

    ```
    mvn clean spring-boot:run
    ```

2. URL that can be accessed :

    * Login : [http://localhost:10000/login]
    * User Info : [http://localhost:10000/uaa/me]
    * Public Key to verification token JWT : [http://localhost:10000/uaa/oauth/token_key]
    * Authorization Grant : [http://localhost:10000/uaa/oauth/authorize]

### REST Resource Server ###

1. Masuk ke folder resource-server

    ```
    cd rest
    ```

2. Run the application

    ```
    mvn clean spring-boot:run
    ```

3. Browse to [http://localhost:10001/api/halo?name=admin](http://localhost:10002/api/halo?name=admin)