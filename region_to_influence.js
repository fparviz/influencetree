var regionInf =

{
	"Canada": ["Charles Taylor (philosopher)", "Northrop Frye", "Marshall McLuhan", "Gerald Cohen", "Patricia Churchland", "Paul Churchland", "David Gauthier"],
	"Asia": ["Ibn Arabi", "Laozi", "Mou Zongsan", "Derek Parfit", "Tetsuro Watsuji", "Confucius", "Michel Henry", "Kitaro Nishida", "Hong Dae-yong", "Epicurus", "Zhu Xi"],
	"Australia": ["David Malet Armstrong", "Peter Singer", "J. L. Mackie", "Annette Baier", "Samuel Alexander", "Arthur Prior"],
	"Italy": ["Giordano Bruno", "Arthur Schopenhauer", "Giovanni Gentile", "Antonio Negri", "Baruch Spinoza", "Giuseppe Mazzini", "Antonio Gramsci", "Antonio Labriola", "Gaetano Mosca", "Norberto Bobbio", "Giorgio Agamben", "Boethius", "Gianni Vattimo", "Empedocles", "Gottfried Wilhelm Leibniz", "Giovanni Pico della Mirandola", "S\u00f8ren Kierkegaard", "Benedetto Croce", "Niccol\u00f2 Machiavelli", "Umberto Eco", "Giorgio Del Vecchio", "Ludwig Wittgenstein"],
	"Czech Republic": ["Jan Hus", "Hans Kelsen", "Gottfried Wilhelm Leibniz", "Edmund Husserl", "Maine de Biran", "Jan Pato\u010dka", "Gy\u00f6rgy Luk\u00e1cs", "Karel Kos\u00edk", "Ludwig Wittgenstein", "Arthur Schopenhauer", "Bernard Bolzano", "Johann Gottlieb Fichte"],
	"Eastern Europe": ["Slavoj \u017di\u017eek", "Isaiah Berlin", "Svetozar Markovi\u0107", "Gottfried Wilhelm Leibniz", "Alexius Meinong", "African Spir", "Adam Schaff"],
	"Poland": ["Christian Wolff (philosopher)", "Karl Leonhard Reinhold", "Baruch Spinoza", "\u00c9mile Meyerson", "Gorgias", "Leszek Ko\u0142akowski", "Emil Lask", "Karl-Otto Apel", "Johann Gustav Droysen", "Roman Ingarden", "Arthur Schopenhauer", "Friedrich Schleiermacher", "Ernst Cassirer", "Johann Gottlieb Fichte", "Salomon Maimon", "Norbert Elias", "Frithjof Bergmann"],
	"Africa": ["Alain Badiou", "Jacques Ranci\u00e8re", "Baruch Spinoza", "Julia Kristeva", "Jean-Jacques Rousseau", "Louis Althusser", "Carneades", "Jacques Derrida", "Ludwig Wittgenstein", "John McDowell", "Plotinus", "Epicurus", "Albert Camus", "Luce Irigaray", "Panaetius", "H\u00e9l\u00e8ne Cixous"],
	"Subcontinent": ["Syed Ahmad Khan", "Abul A'la Maududi", "Muhammad Sirajuddin Naqshbandi", "Tajuddin Muhammad Badruddin", "Abul Hasan Ali Hasani Nadwi", "Narayan Maharaj", "Haji Dost Muhammad Qandhari", "P\u0101\u1e47ini", "Mirza Mazhar Jan-e-Janaan", "Ahmad Sirhindi", "Debiprasad Chattopadhyaya", "Upasni Maharaj", "Jean-Jacques Rousseau", "Muhammad Usman Damani", "Ludwig Wittgenstein", "Epicurus", "Hazrat Babajan", "Fazal Ali Qureshi", "Muhammad Tahir", "Muhammad Iqbal"],
	"France": ["Ivan Illich", "Tetsuro Watsuji", "Nicholas of Cusa", "Blaise Pascal", "Charles Maurras", "Fran\u00e7ois Laruelle", "Baruch Spinoza", "Ren\u00e9 Descartes", "Pierre Bourdieu", "Vladimir Jank\u00e9l\u00e9vitch", "F\u00e9lix Ravaisson-Mollien", "Claude L\u00e9vi-Strauss", "Montesquieu", "Louis Gabriel Ambroise de Bonald", "Jacob Taubes", "Luce Irigaray", "F\u00e9lix Guattari", "Guy Debord", "Jean-Jacques Rousseau", "Simone Weil", "Jean-Fran\u00e7ois Lyotard", "Charles Bernard Renouvier", "Jacques Maritain", "Gaston Bachelard", "Jean-Luc Nancy", "\u00c9mile Chartier", "Hugo Grotius", "Gottfried Wilhelm Leibniz", "Jacques Ellul", "Ernest Renan", "Pierre Duhem", "Raymond Aron", "Roland Barthes", "Curt John Ducasse", "Jean Baudrillard", "Claude Adrien Helv\u00e9tius", "Jules Lequier", "L\u00e9on Brunschvicg", "Xavier Zubiri", "Peter Abelard", "Jean-Marie Guyau", "Jean-Luc Marion", "Louis Lavelle", "\u00c9tienne Gilson", "Ibn Arabi", "Georges Bataille", "Arthur Schopenhauer", "Nicolas Malebranche", "Michel de Montaigne", "\u00c9tienne Bonnot de Condillac", "Ren\u00e9 Gu\u00e9non", "Michel Foucault", "Jean Bodin", "Johann Gottlieb Fichte", "Charles Fourier", "Pierre-Joseph Proudhon", "Ernest Gellner", "Gilbert Simondon", "Paul Ric\u0153ur", "Emil Cioran", "Pierre Gassendi", "Ludwig Wittgenstein", "Paul Feyerabend", "Gilles Deleuze", "Adamantios Korais", "Georges Canguilhem", "Julia Kristeva", "Quentin Meillassoux", "Georges Sorel", "Gy\u00f6rgy Luk\u00e1cs", "Henri Bergson", "Gabriel Marcel", "Desiderius Erasmus", "Jean-Paul Sartre", "Martial Gueroult", "Nicole Oresme", "Joseph Mar\u00e9chal", "Georges Palante", "Marquis de Sade", "Maine de Biran", "William Petty", "Guillaume Bud\u00e9", "Pierre Bayle", "S\u00f8ren Kierkegaard", "Victor Cousin", "Ferdinand de Saussure", "\u00c9mile Boutroux", "Maurice Merleau-Ponty", "Claude Henri de Rouvroy comte de Saint-Simon", "Alain de Benoist", "Maurice Blanchot", "Jacques Lacan", "Auguste Comte", "Denis Diderot"],
	"United States": ["Mortimer J. Adler", "Nicholas Wolterstorff", "John Searle", "Stanley Cavell", "Crispin Wright", "Henry David Thoreau", "Mary Ainsworth", "Fred Dretske", "Duncan Kennedy (legal philosopher)", "Paul Feyerabend", "Roderick T. Long", "Ferdinand de Saussure", "Judith Butler", "Arthur Schopenhauer", "Jerry Fodor", "Cornel West", "Gy\u00f6rgy Luk\u00e1cs", "Graham Harman", "Saul Kripke", "Alvin Plantinga", "Nancy Fraser", "Peter Achinstein", "Susanne Langer", "David Lewis (philosopher)", "Paul Watzlawick", "Robert Nozick", "Martin Buber", "Sidney Hook", "Willard Van Orman Quine", "John Dewey", "Murray Bookchin", "John Zerzan", "Charles Cooley", "Mary Daly", "George Herbert Mead", "Robert Anton Wilson", "John Rawls", "Stanley Rosen", "Fredric Jameson", "Hubert Dreyfus", "Josiah Royce", "Hilary Putnam", "Morris Janowitz", "Hans Vaihinger", "Edwin Arthur Burtt", "Donald Davidson (philosopher)", "S\u00f8ren Kierkegaard", "Edward Shils", "Clarence Irving Lewis", "William Alston", "John D. Caputo", "Wilfrid Sellars", "Thomas Kuhn", "Ronald Dworkin", "Nelson Goodman", "Allan Bloom", "Claudia Card", "Daniel Dennett", "Noam Chomsky", "Timothy Williamson", "Kenneth Waltz", "Johann Gottlieb Fichte", "Jean-Jacques Rousseau", "Ludwig Wittgenstein", "Richard Rorty", "Ralph Waldo Emerson", "Virginia Held"],
	"South America": ["Jorge \u00c1ngel Livraga Rizzi", "Ernesto Laclau", "Arthur Schopenhauer", "Fernando Gonz\u00e1lez (writer)", "M\u00e1rio Ferreira dos Santos", "Mario Bunge"],
	"Other": ["Muhammad al-Shaybani", "David Ray Griffin", "Martin Buber", "Javed Ahmad Ghamidi", "A. J. Ayer", "Nicholas of Cusa", "Julius Evola", "Dominique Janicaud", "William James", "Martha Albertson Fineman", "Amin Ahsan Islahi", "Arthur Schopenhauer", "Pseudo-Dionysius the Areopagite", "Paul Weiss (philosopher)", "Harold Arthur Prichard", "Johann Gottfried Herder", "Zhuang Zhou", "Sextus Empiricus", "Eva Kittay", "Thomas Hill Green", "Carl F. H. Henry", "Baruch Spinoza", "Kendall Walton", "Emer de Vattel", "Zhou Dunyi", "Syed Qazi Muzainul Haq", "Abdulhakim Arvasi", "Herbert McCabe", "Richard Sylvan", "Harold Joachim", "Robert Brandom", "Shibli Nomani", "Curtis Yarvin", "Ray Brassier", "Epicurus", "Claude L\u00e9vi-Strauss", "J. M. E. McTaggart", "Stephen Walt", "Simone de Beauvoir", "Gottfried Wilhelm Leibniz", "Sayyad Laal Shah Hamdani", "Thales", "Pherecydes of Syros", "Karl Popper", "Charles Hartshorne", "Joseph de Maistre", "James Mill", "Alexis de Tocqueville", "Mozi", "Heinrich Rombach", "Lucretius", "Robert Merrihew Adams", "Pythagoras", "Bertrando Spaventa", "Cheng Yi (philosopher)", "Johann Gottlieb Fichte", "Bertrand de Jouvenel", "Mencius", "T. M. Scanlon", "Nick Land", "Ferdinand de Saussure", "Arne N\u00e6ss", "Gordon Clark", "Jean-Jacques Rousseau", "Sam C. Sarkesian", "David Schmidtz", "Abu Yusuf", "Sibawayh", "Susan Haack", "Aristotle", "Xavier Zubiri", "Ludwig Wittgenstein", "Wolfgang Smith", "Antisthenes", "Anaximander"],
	"Germany": ["Martin Heidegger", "Thomas Hill Green", "Friedrich Heinrich Jacobi", "Nicholas of Cusa", "Gabriel Wagner", "Ludwig Feuerbach", "Axel Honneth", "Baruch Spinoza", "Imre Lakatos", "J\u00fcrgen Habermas", "Epicurus", "Leo Strauss", "Bruno Bauer", "Otto Weininger", "Immanuel Kant", "Hans Jonas", "Carl Gustav Hempel", "Karl Marx", "Max Horkheimer", "Theodor Lipps", "Jean-Jacques Rousseau", "Franz Brentano", "Rudolf Christoph Eucken", "Meister Eckhart", "F. C. S. Schiller", "Moritz Schlick", "Wilhelm Windelband", "Max Stirner", "Paracelsus", "Peter J. Katzenstein", "Alexander Gottlieb Baumgarten", "August Schleicher", "Oswald Spengler", "Karl Popper", "Hugo Grotius", "Carl Schmitt", "Josef Pieper", "Moses Mendelssohn", "Martin Buber", "Walter Benjamin", "Nicholas Rescher", "Wilhelm Dilthey", "Karl Korsch", "Thomas Metzinger", "Max Scheler", "Kuno Fischer", "Arthur Schopenhauer", "Franz Rosenzweig", "Jakob B\u00f6hme", "Gottlob Frege", "Hermann Lotze", "Karl Rahner", "Hans Reichenbach", "Eric Voegelin", "Johann Georg Hamann", "Karl Jaspers", "Ernest Nagel", "Joseph Dietzgen", "Immanuel Hermann Fichte", "Friedrich Wilhelm Joseph Schelling", "Ernst Bloch", "Otto Neurath", "Friedrich Nietzsche", "Gy\u00f6rgy M\u00e1rkus", "Ludwig Wittgenstein", "Paul Feyerabend", "Julia Kristeva", "August Leskien", "Friedrich Engels", "Gy\u00f6rgy Luk\u00e1cs", "Friedrich Adolf Trendelenburg", "Georg Henrik von Wright", "Martin Knutzen", "Baron d'Holbach", "Joseph Mar\u00e9chal", "Gottfried Wilhelm Leibniz", "Carl Stumpf", "Heinrich Rickert", "Georg Wilhelm Friedrich Hegel", "Rudolf Carnap", "Wilhelm von Humboldt", "Georg Simmel", "Michel Br\u00e9al", "S\u00f8ren Kierkegaard", "Johann Gottlieb Fichte", "Franz Bopp", "Ferdinand de Saussure", "Herbert Marcuse", "Karl Robert Eduard von Hartmann", "Karl Brugmann", "Kurt Koffka", "Johann Friedrich Herbart", "Jacob Taubes", "Petar II Petrovi\u0107-Njego\u0161", "Theodor W. Adorno", "Walter Kaufmann (philosopher)", "Paul Thieme"],
	"Middle East": ["Al-Jahiz", "Arthur Schopenhauer", "Al-Kindi", "Reza Davari Ardakani", "Porphyry (philosopher)", "Zeno of Sidon", "Mulla Sadra", "Moinuddin Chishti", "Edward Said", "Epicurus", "Epictetus", "Rigas Feraios", "Joseph Raz", "Al-Ma\u02bfarri", "Iamblichus", "Gilbert Simondon", "Cornelius Castoriadis", "Diogenes of Sinope", "Antarah ibn Shaddad", "Chrysippus", "Al-Hasan ibn 'Ali al-Barbahari", "Ludwig Wittgenstein", "Yusuf ibn Abd al-Rahman al-Mizzi", "Proclus"],
	"UK": ["Jeremy Bentham", "John Scotus Eriugena", "Francis Bacon", "Alfred North Whitehead", "Francis Hutcheson (philosopher)", "John Colet", "Arthur Schopenhauer", "Duns Scotus", "John Anderson (philosopher)", "Raymond Williams", "Frank P. Ramsey", "John Wycliffe", "W. D. Ross", "Michael Oakeshott", "Keith Ward", "Edmund Burke", "Richard Swinburne", "Thomas Reid", "Pythagoras", "Bertrand Russell", "Adam Smith", "R. G. Collingwood", "Thomas Hobbes", "Peter Geach", "Epicurus", "William of Ockham", "John Austin (legal philosopher)", "Gilbert Ryle", "Gottfried Wilhelm Leibniz", "Jean-Jacques Rousseau", "Bernard Williams", "Maine de Biran", "P. F. Strawson", "Paul Grice", "Karl Popper", "David Hartley (philosopher)", "H. L. A. Hart", "Hugo Grotius", "S\u00f8ren Kierkegaard", "Luce Irigaray", "Philippa Foot", "Johann Gottlieb Fichte", "Baruch Spinoza", "David Hume", "Stuart Hampshire", "Ferdinand de Saussure", "George Berkeley", "F. H. Bradley", "C. D. Broad", "John Locke", "John Stuart Mill", "J. L. Austin", "Michael Dummett", "Thomas Paine", "G. E. Moore", "Ludwig Wittgenstein", "Henry Sidgwick", "John Hick", "Herbert Spencer"],
	"Greece": ["Crates of Thebes", "Speusippus", "Leucippus", "Hipparchia of Maroneia", "Heraclitus", "Cleanthes", "Baruch Spinoza", "Pythagoras", "Gottfried Wilhelm Leibniz", "Plato", "Democritus", "Euclid of Megara", "Aenesidemus", "Epicurus", "Arcesilaus", "Zeno of Citium", "Stilpo", "Socrates", "Karl Popper", "Melissus of Samos", "Protagoras", "S\u00f8ren Kierkegaard", "Parmenides", "Jean-Jacques Rousseau", "Zeno of Elea", "Othmar Spann", "Pyrrho", "Ludwig Wittgenstein", "Theophilos Kairis", "Adamantios Korais", "Theophrastus", "Gaius Musonius Rufus"],
	"Russia": ["Claude L\u00e9vi-Strauss", "Vladimir Solovyov (philosopher)", "Alexandre Koyr\u00e9", "Roman Jakobson", "Gottfried Wilhelm Leibniz", "Alexandre Koj\u00e8ve", "Jean-Jacques Rousseau", "Arthur Schopenhauer", "Max Black", "Emmanuel Levinas", "Peter Kropotkin", "Karl Popper", "Otto Weininger", "Nicolai Hartmann", "George Gurdjieff", "Morris Raphael Cohen", "Mikhail Bakhtin", "Nikolai Berdyaev", "Mikhail Bakunin"],
	"Spain": ["Ludwig Wittgenstein", "Baruch Spinoza", "Nahmanides", "Judah Halevi", "Nicholas of Cusa", "Hannah Arendt", "Averroes", "Franciscus van den Enden", "Seneca the Younger", "Arthur Schopenhauer", "Martin Buber", "Hans-Georg Gadamer", "Jos\u00e9 Ortega y Gasset", "Francisco Su\u00e1rez", "George Santayana", "Dieter Henrich", "Maimonides"]
}