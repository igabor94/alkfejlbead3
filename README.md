# Alkalmazások fejlesztése 1. beadandó

Téma: Családi TODO


## Követelmény-analízis

### Követelmények
- #### Funkcionális elvárások
	- Látogatóként regisztráció az oldalra
	- Látogatóként bejelentkezés az oldalra
	- Látogatóként a feladatok megtekintése
	- Látogatóként feladat kiírása
	- Látogatóként feladat szerkesztése
	- Látogatóként feladat törlése
	- Főoldalon az alkalmazás ismertetése

- #### Nem-funkcionális elvárások
    - Felhasználóbarát kinézet
    - Hatákonyság


### Használatieset-modell

- #### Szerepkörök
	1. Vendég
		- főoldal megtekintése
		- bejelentkezés
		- regisztráció
        - feladatok megtekintése
        - feladat teljeskörű szerkesztése
        - feladat törlése
        
    2. Felhasználó
        - Vendég szerepköre

- #### Használatieset diagram
    ![Használati esetek](docs/images/haszneset.png)

- #### Folyamatok pontos menete
    1. Új feladat ![Új feladat](docs/images/folym_meghat_new.png)
    2. Feladat módosítás ![Feladat módosítás](docs/images/folym_meghat_edit.png)
    3. Feladat törlés ![Feladat törlés](docs/images/folym_meghat_del.png)


## Tervezés

### Architektúra terv
- #### Oldaltérkép
	- **Publikus:**
	    - Főoldal
	    - Bejelentkezés
	    - Regisztráció
	    - Főoldal
	    - Kijelentkezés
	    - Feladatok listája
	        + új feladat
	        + feladat szerkesztése
	        + feladat törlése (adminként)

- #### Végpontok
    - GET /: főoldal
    - GET /todos/list: feladatok listázása
    - GET /todos/new: új feladat bejegyzése
    - POST /todos/new: újonnan bejegyzett adat feldolgozása
    - GET /todos/edit/id: feladat szerkesztése
    - POST /todos/edit/id: szerkesztett adat feldolgozása

### Felhasználóifelület-modell
- #### Oldalvázlatok
    - Főoldal
        ![Főoldal](docs/images/vazlat_fooldal.jpg)
    - Bejelentkezés
        ![Bejelentkezés](docs/images/vazlat_login.jpg)
    - Regisztráció
        ![Regisztráció](docs/images/vazlat_reg.jpg)
    - Feladatok
        ![Feladatok](docs/images/vazlat_list.jpg)
    - Új feladat
        ![Új feladat](docs/images/vazlat_new.jpg)
    - Feladat módosítás
        ![Feladat módosítás](docs/images/vazlat_edit.jpg)

- #### Designterv
    - Főoldal
        ![Főoldal](docs/images/kesz_fooldal.png)
    - Bejelentkezés
        ![Bejelentkezés](docs/images/kesz_login.png)
    - Regisztráció
        ![Regisztráció](docs/images/kesz_reg.png)
    - Feladatok
        ![Feladatok](docs/images/kesz_list.png)
    - Új feladat
        ![Új feladat](docs/images/kesz_new.png)
    - Feladat módosítás
        ![Feladat módosítás](docs/images/kesz_edit.png)

### Osztálymodell
#### Adatmodell
![Adatmodell](docs/images/adatmodell.png)
#### Adatbázisterv
![Adatbázisterv](docs/images/adatbazisterv.png)
#### Állapotdiagram
![Állapotdiagram](docs/images/allapotdiag.png)


### Dinamikus működés
#### Szekvenciadiagram
![Szekvenciadiagram](docs/images/szekv.png)


## Implementáció
### Fejlesztői környezet bemutatása
- Cloud9, felhőalapú IDE
- GitHub, online verziókövető rendszer



## Felhasználói dokumentáció
### A futtatáshoz ajánlott hardver-, szoftver konfiguráció
A Cloud9 használata javasolt.
Helyileg is futtatható, ehhez további előkészületek szükségesek:
- nodejs (+ npm) telepítése

A hardverkövetelmények minimálisak.

### Telepítés lépései
Helyi gépen (vagy Cloud9-on):

- git clone https://github.com/igabor94/alkfejlbead3.git
- npm install
### A program 
Az alábbi paranccsal futtatható:
- ember serve