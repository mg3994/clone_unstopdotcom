import requests

urls = [
    "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/internships_new.png",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/jobs-new.png",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/competitions-new-1.png",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-tests-new.png",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-test-new.png",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-interview-new.png",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mentorship-new.png",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/course-new.png",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/100-days-code-new.png",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/home_heading_after.png",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/hero_user_side_img.png"
]

for url in urls:
    try:
        r = requests.head(url, timeout=5)
        print(f"{url}: {r.status_code}")
    except Exception as e:
        print(f"{url}: Error {e}")
