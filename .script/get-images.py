import os
import requests
from bs4 import BeautifulSoup
import uuid

# Fungsi untuk membuat folder
def create_folder(directory):
    if not os.path.exists(directory):
        os.makedirs(directory)

# Fungsi untuk mengunduh gambar
def download_image(url, folder):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Jika status_code bukan 200, akan memunculkan HTTPError
        file_name = os.path.join(folder, f"{uuid.uuid4().hex[:8]}.jpg")
        with open(file_name, 'wb') as f:
            f.write(response.content)
    except requests.HTTPError as e:
        print(f"Failed to download {url}: {e}")

# URL target
url = 'https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2024-07-01&monthly_length=3&monthly_end_date=2024-10-01&price_filter_input_type=0&channel=EXPLORE&search_type=category_change&price_filter_num_nights=5&drawer_open=false&category_tag=Tag%3A789'

# Kirim permintaan ke halaman web
response = requests.get(url)
if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Buat folder berdasarkan lokasi
    location = 'content'
    create_folder(location)
    
    # Temukan semua tag gambar (contoh berdasarkan struktur HTML Airbnb)
    # Perhatikan, kamu harus memastikan class yang digunakan sesuai dengan HTML aktual dari Airbnb
    parent_div = soup.find('div', class_ = 'gsgwcjk')
    div_tags = parent_div.find_all('a', class_='rfexzly')
    
    for div in div_tags:
        img_tag = div.find_all('img')
        for img in img_tag:
          if img and 'src' in img.attrs:
              img_url = img['src']
              download_image(img_url, location)

print("Scraping selesai!")
