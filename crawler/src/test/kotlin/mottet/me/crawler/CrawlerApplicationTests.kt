package mottet.me.crawler

import org.jsoup.Jsoup
import org.junit.Test

//@RunWith(SpringRunner::class)
//@SpringBootTest
class CrawlerApplicationTests {

	@Test
	fun contextLoads() {
		val select = Jsoup.connect("https://www.indiegogo.com/projects/pup-your-connected-pocket-scanner-home#/")
                .get()
                .select("script").first()

		println(select.toString())
	}

}
