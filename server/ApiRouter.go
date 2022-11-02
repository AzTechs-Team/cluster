package main

import "github.com/gofiber/fiber/v2"

func ApiRouter(app *fiber.App) {
	app.Static("/", "./dist")
	app.Static("*", "./dist")
	// app.Static("/about", "./dist")
}
