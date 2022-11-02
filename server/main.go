package main

import (
	"mime"

	"github.com/gofiber/fiber/v2"
)

type (
	Host struct {
		Fiber *fiber.App
	}
)

func init() {
	_ = mime.AddExtensionType(".js", "text/javascript")
	_ = mime.AddExtensionType(".css", "text/css")
}
func main() {
	// app := fiber.New()
	hosts := map[string]*Host{}

	// Main Site
	site := fiber.New()
	hosts["localhost:5000"] = &Host{site}
	// site.Get("/", func(c *fiber.Ctx) error {
	// 	return c.SendString("this site")
	// })
	SiteRouter(site)
	// API for other shitty things
	api := fiber.New()
	hosts["api.localhost:5000"] = &Host{api}
	// api.Get("/", func(c *fiber.Ctx) error {
	// 	return c.SendString("this shit is working")
	// })
	ApiRouter(api)
	// Setup(app)
	app := fiber.New()
	app.Use(func(c *fiber.Ctx) error {
		host := hosts[c.Hostname()]
		if host == nil {
			c.SendStatus(fiber.StatusNotFound)
		} else {
			host.Fiber.Handler()(c.Context())
			return nil
		}
		return nil
	})

	app.Listen(":5000")
}
