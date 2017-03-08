# Elephant Carpaccio

## Aufgabe

Erstelle ein Kassensystem, das aus folgenden Eingaben den Gesamtpreis errechnet:

- Ein Artikel
- Menge des Artikels
- Land wo der Verkäufer gemeldet ist
 
Hierbei sollen die Mehrwertsteuer und eventuelle Rabatte auf den Gesamtpreis 
berücksichtigt werden.

#### Rabatte

| Summe     | Rabatt |
|-----------|-------:|
| ab 1000 € |     1% |
| ab 5000 € |     2% |

#### Mehrwertsteuertabelle

| Land        | Mehrwertsteuer |
|-------------|---------------:|
| Deutschland |            19% |
| Österreich  |            20% |
| Schweiz     |             8% |
| Polen       |            23% |
| Frankreich  |            20% |

## Vorgehen

Das Kassensystem soll nicht einfach implementiert werden, sondern vorher in 
*kleinstmögliche* User-Stories aufgeteilt werden. Diese werden so geordnet,
dass möglichst früh ein möglichst großer Nutzen für den User bereit gestellt wird.

Dann folgt die Implementierung, Test-driven by the book

#### Ziel

Es sollte zu jedem Zeitpunkt ein lauffähiges Produkt zur Verfügung stehen, wobei der User-Value mit jeder Iteration steigt.

#### Zeitplan

| Aufgabe          |      Dauer |
|------------------|-----------:|
|Stories schreiben | 15 Minuten |
|Stories ordnen    |  5 Minuten |
|Implementierung   | 40 Minuten |

## Ausführen der Tests

Run tests via `npm test`.
