class UrlAnalyzer < ApplicationController

  def search_google(query)
    #fetch results Here
    #nokogiri to scrape urls

        res = []
        queryResults = GoogleCustomSearchApi.search(query)

        if queryResults.try(:error) || queryResults.items.empty?
            res = []
        else
          queryResults["items"].each_with_index do |item, index|

            property = Property.find_or_create_by(root_url: (Adomain.domain item["link"]))
            #property.update(occurrences: += 1))
            property.increment!(:occurrences)

            itemData = {}
            itemData["rank"] = index + 1
            itemData["url"] = item["link"]
            itemData["sentiment"] = property.sentiment ||= "Unknown."
            itemData["analysis"] = property.analysis ||= "Not available."
            itemData["occurrences"] = property.occurrences



            #Property.where(root_url: (Adomain.domain item["link"])).
            #first_or_create(root_url: (Adomain.domain item["link"]), occurrences: 1).
            #increment(:occurrences)

            #update("occurrences = occurrences + 1", {:occurrences => occurrences})
            #update(occurrences: += 1)
            #byebug

            res << itemData

             #res << { rank: (index + 1), url: item["link"] }
           end
        end

    return res
  end

  def get_domain_root(domain)
    # Adomain.domain item["link"]
  end

  def analyze_url(url)

    Property.where(root_url: 'jason.com').
    first_or_create(root_url: 'jason.com').
    increment(:occurrences)

    #analysis = {}
    #analysisroot_url = Adomain.domain url



  end

  def analyze_results

    #analysis Here
    results = [
      { rank: 1,
        url: "https://www.ethan.com/report/ali-shah/newport-coast-ca-crook-1480866",
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
