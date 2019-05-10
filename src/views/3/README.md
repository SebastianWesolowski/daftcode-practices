# Daftup test for beginners

Zadania rekrutacyjne

## Zasady oceniania

Na test składają się 3 zadania. Powinny one być zrobione bez użycia zewnętrznych
paczek i będą sprawdzane w przeglądarce Chrome, w wersji 73.

Sprawdzane będą następujące pliki:

- 1.html - z pierwszym zadaniem
- 2.html - z drugim zadaniem
- 3.html - z trzecim zadaniem

W razie wątpliwości, znaczenie będą miały takie szczegóły, jak:

- podejście "Mobile First"
- użycie BEMa
- semantyczny HTML
- brak nadmiarowego HTMLa przy implementacji

### 3. Filtrowanie listy

Plik: 3.html
Stwórz tabelę oraz formularz, przy pomocy którego będzie można filtrować jej treść.
Wymagania:

- formularz
  - pole `<input>`, do którego będzie wpisywana fraza filtrująca
  - przycisk, po kliknięciu którego tablica będzie filtrowana
  - filtrowanie powinno też nastąpić przy naciśnięciu Enter w trakcie
    wpisywania frazy
- tabela
  - powinna zawierać następującą strukturę:

|                          |
| ------------------------ |
| Walmart                  |
| State Grid               |
| Sinopec Group            |
| China National Petroleum |
| Royal Dutch Shell        |
| Toyota Motor             |
| Volkswagen               |
| BP                       |
| Exxon Mobil              |
| Berkshire Hathaway       |

- zasady filtrowania
  - filtrowanie polega na pokazaniu tylko tych wierszy tabeli, w którychznajduje się wpisana fraza
  - fraza może znajdować się w dowolnym miejscu wiersza (np. przy frazie“wol” słowo “rewolwer” powinno się pojawić)
  - filtrowanie nie powinno rozróżniać wielkich i małych liter (np. przy frazie“Rew” słowo “rewolwer” powinno się pojawić i na odwrót: “rew”pokazuje “Rewolwer”)
  - filtrowanie z pustym polem powinno pokazać wszystkie wiersze tabeli
