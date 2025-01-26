import { VercelRequest, VercelResponse } from '@vercel/node'
import { render } from '../src/entry-server'
import fs from 'fs'
import path from 'path'

export default async function handler(req: VercelRequest, res: VercelResponse) {
	const url = req.url || '/'
	try {
		const template = fs.readFileSync(
			path.resolve('./index.html'),
			'utf-8'
		)

		const appHtml = render()

		const html = template.replace('<!--ssr-outlet-->', appHtml)

		res.setHeader('Content-Type', 'text/html')
		res.status(200).send(html)
	} catch (err) {
		console.error(err)
		res.status(500).send('Ошибка сервера')
	}
}
