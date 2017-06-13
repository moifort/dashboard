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

    @Scheduled(fixedDelay = 60_000)
    fun fetch() {
        collect = fetchCollect()
        backers = fetchBackers()
    }

    fun fetchBackers() = fetch(".bankers")
    fun fetchCollect() = fetch(".collected_amount").replace("€", "")
    fun fetch(css : String) = Jsoup.connect("https://www.kisskissbankbank.com/pup-le-mini-scanner-connecte-le-plus-rapide-du-monde?ref=selection")
            .get()
            .select(css)
            .text()!!
}

@RestController
@RequestMapping("/indiegogo")
class IndiegogoController {
    var collect = fetchCollect()
    var backers = fetchBackers()

    @RequestMapping("/collect", produces = arrayOf("application/json"))
    fun collect() = collect

    @RequestMapping("/backers")
    fun backers() = backers

    @Scheduled(fixedDelay = 60_000)
    fun fetch() {
        collect = fetchCollect()
        backers = fetchBackers()
    }

    fun fetchBackers() = fetch(".bankers")
    fun fetchCollect() = fetch(".indemandProgress-raisedAmount")
    fun fetch(css : String) = Jsoup.connect("https://www.indiegogo.com/projects/pup-your-connected-pocket-scanner-home#/")
            .get()
            .select(css)
            .text()!!
}