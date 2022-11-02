package main

import "github.com/gofiber/fiber/v2"

func SiteRouter(app *fiber.App) {
	app.Static("/", "./dist")
	app.Static("*", "./dist")
	// app.Static("/", "./dist")
}
