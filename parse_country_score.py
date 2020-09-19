"""
Parse Country Data
"""
import pandas as pd 


# reading csv file
df = pd.read_csv("data/passport-index-matrix-2020.csv")

country_list = list(df)
country_score = {}

print(df)
for index, row in df.iterrows():
    # fill in country name
    country_score[row[0]] = 0
    assert row[0] == country_list[index + 1]
    for (country_idx, country) in enumerate(country_score):
        if row[country_idx + 1] == 'VOA' or \
            row[country_idx + 1] == 'ETA':
            country_score[row[0]] += 1
            print(country_list[index + 1])
            print(country_list[country_idx + 1])
            print(row[country_idx + 1])
            print("\n")
            continue
        try:
            num_days = int(row[country_idx + 1])
        except ValueError:
            continue
        if num_days != -1:
            country_score[row[0]] += 1
            print(country_list[index + 1])
            print(country_list[country_idx + 1])
            print(row[country_idx + 1])
            print("\n")
from pprint import pprint

pprint(sorted(country_score, key=country_score.get, reverse=True))
