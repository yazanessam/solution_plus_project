# Dockerizing the app


## Installation

To get started with the Solution Plus Project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/belalelnady/solution_plus_project.git
    ```

2. Navigate to the project directory:
    ```bash
    cd solution_plus_project/application
    ```
3. Create .env for the Database variables

4.  Build the app :
    ```bash
    docker build -t container-name:v1 . 
    ```
5. Compose Up:
   ```bash
   docker compose -f docker-compose.yaml up  -d 
   ```
   


## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
## Original Repository

This project is based on the original repository [university_app](https://github.com/zainkai/university_app) by [zainkai](https://github.com/zainkai).
The original repository can be found [here](https://github.com/zainkai/university_app).

