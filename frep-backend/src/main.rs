use actix_web::{get, App, HttpServer, Responder};
use env_logger;

#[get("/")]
async fn hello() -> impl Responder {
    "Hello from Frep Backend 🚀"
    }

    #[actix_web::main]
    async fn main() -> std::io::Result<()> {
        // تشغيل اللوجر
            env_logger::init();

                println!("🚀 Server running at http://127.0.0.1:8080");

                    HttpServer::new(|| {
                            App::new()
                                        .service(hello)
                                            })
                                                .bind(("127.0.0.1", 8080))?
                                                    .run()
                                                        .await
                                                        }