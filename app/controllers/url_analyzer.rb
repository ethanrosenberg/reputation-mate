class UrlAnalyzer < ApplicationController

  def search_google
    #fetch results Here
    #nokogiri to scrape urls
    return analyze_results
  end

  def analyze_results

    #analysis Here
    results = [
      { rank: 1,
        url: "https://www.ripoffreport.com/report/ali-shah/newport-coast-ca-crook-1480866",
        sentiment: 'negative'
      },
      { rank: 2,
        url: "https://www.ripoffreport.com/report/stuart-romanoff-darryl-double/ny-failed-pay-professional-1480424",
        sentiment: 'negative'
      },
      { rank: 3,
        url: "https://www.instagram.com/jamessmithvocal/?hl=en",
        sentiment: 'positive'
      },
      { rank: 4,
        url: "https://www.youtube.com/watch?v=iOWboQMmnis",
        sentiment: 'positive'
      },
      { rank: 5,
        url: "https://www.forbes.com/sites/rahathuq/2018/09/06/with-trade-of-ryan-anderson-rockets-keep-their-options-available/#3f474c277714",
        sentiment: 'neutral'
      }
    ]

    return results

  end

end
