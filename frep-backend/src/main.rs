use actix_files as fs;
use actix_web::{get, web, App, HttpResponse, HttpServer, middleware::Logger};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init();
        HttpServer::new(|| {
                App::new()
                            .wrap(Logger::default())
                                        .route("/api/health", web::get().to(|| async { HttpResponse::Ok().body("OK") }))
                                                    // Serve the built frontend (make sure to run `npm run build` in frontend)
                                                                .service(fs::Files::new("/", "../frontend/dist").index_file("index.html"))
                                                                    })
                                                                        .bind(("127.0.0.1", 8080))?
                                                                            .run()
                                                                                .await
                                                                                }