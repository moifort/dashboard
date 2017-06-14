package mottet.me.crawler

import org.jsoup.Jsoup
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.scheduling.annotation.EnableScheduling
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@EnableScheduling
@SpringBootApplication
class CrawlerApplication

fun main(args: Array<String>) {
    SpringApplication.run(CrawlerApplication::class.java, *args)
}


@RestController
@RequestMapping("/kkbb")
class KissKissBankBankController {
    var collect = fetchCollect()
    var backers = fetchBackers()

    @RequestMapping("/collect")
    fun collect() = "{\"current\" : \"$collect\"}"

    @RequestMapping("/backers")
    fun backers() = "{\"current\" : \"$backers\"}"

    @Scheduled(fixedDelay = 350_000)
    fun fetch() {
        collect = fetchCollect()
        backers = fetchBackers()
    }

    private fun fetchBackers() = fetch(".bankers")
    private fun fetchCollect() = fetch(".collected_amount").replace("€", "")
    private fun fetch(css : String) = Jsoup.connect("https://www.kisskissbankbank.com/pup-le-mini-scanner-connecte-le-plus-rapide-du-monde?ref=selection")
            .get()
            .select(css)
            .text()!!
}
