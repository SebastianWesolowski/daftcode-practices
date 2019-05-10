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

## Zadania

### 2. Modal

Plik: 2.html

Stwórz prosty modal (a.k.a. popup) otwierany przyciskiem. Zasady:

- stwórz na stronie przycisk `<button class="button">` (koniecznie z klasą button)
- po kliknięciu w ten button powinien otworzyć się modal , koniecznie z klasą
  modal
- całą stronę pod modalem powinna zakryć półprzezroczysta warstwa, która
  uniemożliwia kliknięcie w stronę pod nią
- na środku tej warstwy niech znajduje się modal z następującą zawartością:
  - nawigacja z linkiem prowadzącym do strony "3.html"
  - przycisk zamykający modal: `<button class="button">` (koniecznie z klasą
    button)
  - po kliknięciu na przycisk zamykający, modal powinien zniknąć

Kryteria oceny:

- przyciski oraz modal mają odpowiednie klasy
- odpowiednie buttony otwierają/zamykają modal
- półprzezroczysta warstwa nie pozwala kliknąć w button otwierający modal
- wewnątrz modalu znajduje się nawigacja z linkiem do "3.html"
