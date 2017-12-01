# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Note.destroy_all
Notebook.destroy_all
Tag.destroy_all
Tagging.destroy_all
Shortcut.destroy_all

IMAGES = [
  "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar.png",
  "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar-1.png",
  "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar-2.png",
  "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar-3.png",
  "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar-4.png",
  "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar-5.png",
  "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar-6.png",
  "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar-7.png",
  "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar-8.png",
  "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar-9.png",
  "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar-0.png",
  "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar-11.png",
  "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar-12.png",
  "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar-13.png",
  "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar-14.png",
]

user1 = User.new(username: 'demo_user', email: 'demo_user@demo.com', password: 'password', img_url: "https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/avatar_images/avatar-9.png")
user1.save

default = Notebook.new(
  title: "demo_user's notebook",
  owner_id: user1.id
)
default.save
user1.default_notebook_id = default.id
user1.save


school = Notebook.new(
  title: 'school',
  owner_id: user1.id
)
school.save
recipes = Notebook.new(
  title: 'recipes',
  owner_id: user1.id
)
recipes.save
lyrics = Notebook.new(
  title: 'lyrics',
  owner_id: user1.id
)
lyrics.save
poetry = Notebook.new(
  title: 'favorite poetry',
  owner_id: user1.id
)
poetry.save

def update()
  year = 2017
  month = [11, 11, 11, 11, 11, 10, 10, 9, 9, 8, 7, 5]
  day = [30, 30, 29, 29, 28, 28, 27, 26, 25, 24, 23, 22, 23, 22, 21, 20, 19, 18, 17, 16, 15, 13, 12, 8, 6, 4, 2]
  hour = (0..14).to_a
  minute = (0..59).to_a
  second = (0..59).to_a
  a = month.sample
  b = day.sample
  c = hour.sample
  d = minute.sample
  e = second.sample
  DateTime.new(
      year,
      a,
      b,
      c,
      d,
      e
    )
end

TAGS = ['astronomy', 'code', 'english', 'lyrics', 'music', 'philosophy', 'quotes', 'recipe', 'school']
astronomy_tag = Tag.new(title: 'astronomy')
astronomy_tag.owner_id = user1.id
astronomy_tag.save!

code_tag = Tag.new(title: 'code')
code_tag.owner_id = user1.id
code_tag.save!

english_tag = Tag.new(title: 'english')
english_tag.owner_id = user1.id
english_tag.save!

lyrics_tag = Tag.new(title: 'lyrics')
lyrics_tag.owner_id = user1.id
lyrics_tag.save!

music_tag = Tag.new(title: 'music')
music_tag.owner_id = user1.id
music_tag.save!

philosophy_tag = Tag.new(title: 'philosophy')
philosophy_tag.owner_id = user1.id
philosophy_tag.save!

quotes_tag = Tag.new(title: 'quotes')
quotes_tag.owner_id = user1.id
quotes_tag.save!

recipe_tag = Tag.new(title: 'recipe')
recipe_tag.owner_id = user1.id
recipe_tag.save!

school_tag = Tag.new(title: 'school')
school_tag.owner_id = user1.id
school_tag.save!

Shortcut.create(
  owner_id: user1.id,
  shortcuttable_type: "Tag",
  shortcuttable_id: school_tag.id,
)

Shortcut.create(
  owner_id: user1.id,
  shortcuttable_type: "Notebook",
  shortcuttable_id: recipes.id,
)

Shortcut.create(
  owner_id: user1.id,
  shortcuttable_type: "Notebook",
  shortcuttable_id: school.id,
)

Shortcut.create(
  owner_id: user1.id,
  shortcuttable_type: "Tag",
  shortcuttable_id: music_tag.id,
)

Shortcut.create(
  owner_id: user1.id,
  shortcuttable_type: "Tag",
  shortcuttable_id: lyrics_tag.id,
)



note = Note.new(
  title: "astronotes 11.30",
  content:
 "<p><strong>11/30</strong></p><p><br></p><p><strong>Something you learned: When a star forms, it collapses by a factor of 1000, meaning the spin speed increases hugely. Planet formation is essentially the carving out of gaps in the disc of spinning dust that forms due to the rotational planar energy around the star.</strong></p><p><strong>&nbsp;</strong></p><p><strong>Question you still have: Why did Neptune end up farther from the sun than Uranus? What were the factors that caused that switch? How long ago did that happen?</strong></p><p><br></p><p>Kflaherty.web.wesleyan.edu/site/astr105.htm</p><p><br></p><p>Last time: gravitational motion, Kepler’s laws, how it relates to Newton</p><p><br></p><p>Electromagnetic spectrum: Light</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-wavelength, period, amplitude</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-crests and troughs</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-direction</p><p><br></p><p>All light travels at roughly 300,000 km/s</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-wavelength, frequency, and period are all related</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-amplitude is separate</p><p><br></p><p>Energy in a photon is incredibly miniscule</p><p><br></p><p>Light as a “wave” is an analogy</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-waves need a medium to propagate through</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-light does not need a medium</p><p>-electric and magnetic fields can move particles, but light waves don’t need those particles…they can just ride the fields</p><p>-light can also behave like a particle</p><p>-radiation requires the movement of electric and magnetic fields</p><p>-if you catch up with that photon, then it’s all of a sudden static</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-time and space are not fixed things because if you catch up with a photon it will no longer exist</p>",
  notebook_id: school.id,
  owner_id: user1.id)
note.save
update_at = DateTime.new(
    2017,
    11,
    30,
    9,
    0,
    0
  )
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: school_tag.id)
Tagging.create(note_id: note.id, tag_id: astronomy_tag.id)

note = Note.new(
  title: "astronotes 11.28",
  content:
   "<p><strong>11/28</strong></p><p><br></p><p>Gravitational Motion</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>Kepler’s Laws (astro.unl.edu/naap/pos/animations/kepler.html)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>1: Orbits are ellipses, not circles</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-highly eccentric – much more elliptical</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-r1 + r2 = 2a</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-r is distance from orbiting body to focus and a is the semimajor axis</p><p><strong>2: Equal area of sweep = equal time (speed of planet: closer to gravitational anchor means faster motion)</strong></p><p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>-sweeping&nbsp;zones have same areas</p><p><strong>3: Period (one full revolution) squared is proportional to the semimajor axis a cubed. Farther planets move slower.</strong></p><p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>-doesn’t depend on eccentricity</p><p><br></p><p>-all derivable from Newton’s laws (specifically law of gravity) but Kepler came before Newton</p><p><br></p><p>The gravitational force the Earth feels from the sun does change along its orbit, as does its speed.</p><p><br></p><p>Kepler’s third law relates period to orbital distance, and can be derived from Newton’s laws, but is missing mass</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-the <strong>sum</strong> of the mass of the central object and the orbiting body</p><p>-Earth’s mass is about 1/1,000,000 the mass of the sun…so it’s really just the sun’s mass that matters because it dominates</p><p>How does the orbital motion of the earth depend on the mass of the Sun?</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-larger sun, stronger gravitational force, which means increased velocity, and&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a shorter period</p><p><br></p><p>This is a powerful way to measure the mass of stars…we just have to measure period and distance of orbiting bodies to find the mass of the central body</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-mass of stars</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-mass of star clusters</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-mass of galaxies</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-mass of clusters of galaxies</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-mass of the supermassive black hole at the center of our galaxy</p><p><br></p><p>It depends on how much mass is inside an orbit, not how it is distributed (because the orbit is centered around the foci/centers of mass)</p><p><br></p><p>Also, if we knew the mass of the sun and the period of the earth’s orbit, we could figure out the mass of the earth…increase the mass of the earth and the period of the earth is smaller.</p><p><br></p><p>If you have velocity, you have the period. You need distance between sun and the galactic center, and the period, in order to discern the mass of the galaxy</p>",
  notebook_id: school.id,
  owner_id: user1.id)
note.save
update_at = DateTime.new(
    2017,
    11,
    28,
    9,
    0,
    0
  )
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: school_tag.id)
Tagging.create(note_id: note.id, tag_id: astronomy_tag.id)

note = Note.new(
  title: "engl 209 paper outline",
  content:
   "<p><span class=\"ql-size-huge\">Paper 1 - Last of the Mohicans</span></p><p><br></p><p><strong>Outline</strong></p><p><strong>&nbsp;</strong></p><p><strong>Argument: </strong>Because Hawkeye is an “ordinary man of the people,” Cooper is able to represent multiple tragedies simultaneously; he is able to weave myth into history and relate both to the present; no one figure dominates the story, which gives primacy to the historical forces that are portrayed, and allows for a nuanced symbolic constellation; in the interactions of the character spaces we find the crucial conflicts that characterize the frontier and the early American colonial chronotopes; the image of history and what is socially necessary in the book extend violently into the present, to show the continuity of a history that is portrayed as both tragic and inevitable; how does this relate to white liberal pseudo-nonracism?</p><p><strong>&nbsp;</strong></p><p><strong>What does it mean for Hawkeye to be a “middle-of-the-road hero?”</strong></p><p>- He is a “central figure” who does commit some heroic acts (Lukács 64). But he is certainly not the only central figure, either.</p><p>-He is a highly referential, allegorical, and symbolic character. His character is a blend between protagonist and minor character, meaning that the novel does to some degree coalesce around him, but on the other hand, he trades in a complex psychology and dominance in discursive representation for allegorical significance.</p><p>-In terms of discursive representation, he takes up space in a way that is at times similar to Heyward, Magua, and Uncas. Different chapters contain different protagonists, if it makes sense to say it that way.</p><p><br></p><p><strong>What are the key social-historical forces that are represented in Hawkeye’s character-zone? How are they represented?</strong></p><p>-His character-space is a hybrid that cycles through occupying both the discursive space of the protagonist and that of the minor character</p><p>-What characterizes the historical novel is the” derivation of the individuality of characters from the historical peculiarity of their age” (Lukács 19).</p><p>-Some main elements/moments that characterize his zone are:</p><p>-manhood</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-inseparable relationship to his long rifle</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-emasculating gamut</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-being a fierce warrior</p><p>-whiteness</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-“I am a man without a cross” early scene with Uncas and Chingachgook</p><p>-morality and discipline</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-his respect for indians but his beliefs regarding savagery</p><p>-above all, purity</p><p>-disdain for notions of mixing (man without a cross, final disapproval at the burial scene)</p><p>-His character-zone is inflected by multiple languages, creating an ideology complex that is the product of his cultural hybridity, making his identification with whiteness all the more paradoxical</p><p><br></p><p><strong>What is the relationship of Hawkeye’s character zone, its contents, and how it works, to the workings of the other characters?</strong></p><p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>-race (an obviously marked inflection of character space)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-markers by name, speech, alliance, knowledge of wilderness</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-gender (another obviously marked inflection of character space)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-violence, victimization, strength</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-morality and discipline</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-“unjust” violence, villainy, the discourse of savagery</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-purity, miscegenation, and cultural hybridity</p><p>-this is the most important one. magua and uncas as potential rapists and lovers (Slotkin’s introduction)</p><p><br></p><p><br></p><p><strong>What then is Hawkeye’s character-space’s role in the character-system represented in the novel?</strong></p><p>-ducking in and out of the narrative; representation; his ideologies and their immanent but unseen corrolaries dominate the story because they represent the socially-necessary, but he does not come to stand for them because his figure does <em>not</em> dominate the story, enabling him to embody the great tragedy of feeling but not understanding, of paradoxically standing for and at the same time espousing against.</p><p>-“It is often precisely in the interaction between character-spaces (rather than merely in the characters or stories themselves) that novels touch history—not least because the very dynamic tension between reference and structure is itself so socially significant, grounded in the problematic elimination or functionalized compression of real persons in the actual world” (Woloch 20).</p><p>-“As the force of social circumstance proves stronger than the intention of the hero and emerges triumphant from the struggle, so the socially necessary asserts itself: the characters act according to their individual inclinations and passions, but the result of their actions is something quite different from what they intended” (Lukács 148).</p><p>-“In both great forms…social-historical necessity must triumph over the will and passions of individuals” (Lukács 149).</p><p>- What Hawkeye stands for, above all else, is racial purity. He does come across as relatively unprejudiced, especially when compared side by side by historical discourses of white racial superiority; however, his advocation for racial purity, and his disdain for the possibility of miscegenation, is what ultimately justifies the genocide of the Mohicans, and of indigenous folk writ large. By nature of his being white, and by the opposing relationship between his ideology of purity and the threat of miscegenation represented by both Magua and Uncas, he throws a historical wrench into what otherwise feels like a (not uncomplicated) good-guys-versus-bad-guys tale.</p><p>-While Hawkeye may advocate for racial purity, the positionality of Magua and Uncas as potential rapists or lovers to Cora means that Hawkeye’s advocacy for that purity is an advocacy that implicitly victimizes white people and whiteness. (footnote: One irony of this is that white settler-colonialists were undeniably the rapists and murderers, literally and metaphorically, of the indigenous people and the land that was here before their arrival.) Also implicit in that victimization is a silent justification of genocide in the name of preserving whiteness itself. This is a paradox in Hawkeye’s character, one who we observe extending a (perhaps) startling amount of respect towards those that white settlers historically considered to be savages that were fully incapable of behaving or being civilized.</p><p><strong>&nbsp;</strong></p><p><strong>What is the relationship of the story and its individuals to the image of history, historical change, and most importantly, “social-historical necessity” portrayed in the novel?</strong></p><p>-“Sexual and racial forces appear in the novel as keys to understanding the larger tendencies that work below and shape the surface of the historical events—specifically the siege of Fort William Henry and the massagre of its inhabitants, and generally the historical triumph of civilization over savagery” (Slotkin xvii).</p><p>-“For Cooper the sources of cultural difference are at bottom a matter of ‘blood.’ Indians are not only unused to discipline and European ideas of manners and restraing; they are inherently incapable of achieving it.Even Chingachgook and Uncas—of the pure and unmixed race of the Mohicans, as Cooper tells us—are tempted by friendship and love to gaze (at least) across the border. From these impulses the tension of the novel arises and is tragically resolved. The figure who tests these boundaries most significantly is Leatherstocking” (Slotkin xvii). It is this that makes Hawkeye the protagonist.</p><p><strong>&nbsp;</strong></p><p><strong>Ultimately, what does Cooper say about history?</strong></p>",
  notebook_id: school.id,
  owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: school_tag.id)
Tagging.create(note_id: note.id, tag_id: english_tag.id)

note = Note.new(
  title: "modern & postmodern notes",
  content:
   "<p><strong>Butler – Undoing Gender</strong></p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“Most cited philosopher in the English-speaking world by far”</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gender is open to a continual remaking</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Anatomy and sex are not without cultural framing (9-10)</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the sphere of postmodernism, Judith Butler’s work stands out for persistence, radical qualities, and continual inquiry into what it means to talk about performativity and performance</p>",
  notebook_id: school.id,
  owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: school_tag.id)
Tagging.create(note_id: note.id, tag_id: philosophy_tag.id)

note = Note.new(
  title: "fred moten - preface for a solo by miles davis",
  content:
   "<p>Fred Moten: Preface for a solo by Miles Davis</p><p><br></p><p><strong>219: “What is it to be thrown into the story of another’s development; and to be thrown into that story as both an interruption of it and as its condition of possibility; and to have that irruption be understood as both an ordering and a disordering movement? And what if one has something like one’s own story to tell. One engages, then, in the production of a subplot, a plot against the plot, contrapuntal, fantastic, underground—a fugitive turn or stealing away (as Nathaniel Mackey or Saidiya Hartman might put it), enacted by a runaway tongue or dissenting body (as Harryette Mullen or Daphne Brooks might have it), from the story within the story.”</strong></p><p><br></p><p>218: “(black) performance as the irruption of the thing through the resistance of the object.”</p><p><br></p><p>220: “When Kant speaks of imagination a distinction is implicit between Phantasie as lawless, quotidian creative activity (at the intersection of the ordinary and the merely [phonetic, culinary, gestural, cultural, sensual]) and such activity’s regulation into/as a philosophical faculty, the means and ends of Einbildungskraft: in other words, clipped wings. However, if Kant prescribes what Menninghaus calls a ‘politics of curtailment’ (1999, 1) of the imagination it must also be said that he acknowledges a resistance to that politics that occurs, as it were, before that politics. Menninghaus’s work is structured by the disclosure of this ambivalence in Kant that can be said to disrupt and appose origin in general. I want to consider this necessarily irregular opening of the regulative and to think it in relation to Kant’s deployment of race and, more pointedly, of blackness, as not only exemplary but constitutive of regulative and/or teleological principle.”</p><p><br></p><p>221-222: this section is key for how blackness works to delimit the imagination and quicken supersensory reactions</p><p><br></p><p>222-223: “Race or the raced figure, particularly the figure of the black, occupies and enacts a kind of force field—the not but nothing other than human—that maintains that distinction while embodying the necessary danger of its inevitable collapse. It is the very mark and location of the non-categorical, of the outlaw that guarantees the law. This is how the exemplary figure of abjection, exploitation, pity and revulsion is also always the exemplary figure of danger, threat and irreducible, unavoidable attraction. Racial slavery constitutes the condition of concretization and dissolution for these concepts and figures. In an age which locates humanity in the drive to be free of any externally imposed law and the impulse to push against the limits of the law in general… that desire to be free, manifest as flight, as escape, as a fugitivity that may well prove to veer away even from freedom as its telos, is indexed to anoriginal lawlessness. The predisposition to break the law is immediately disrupted by an incapacity for law, an inability both to intend the law and intend its transgression and the one who is defined by this double inability is, in a double sense, an outlaw.”</p><p><br></p><p>223: “The imagination, the black and the thing (das Ding) all partake of the lawless freedom that attends the anti- or ante-intentional; all are in need of some external, regulative force that they also body forth. In such a context, amputation/castration/’clipped wings’ emerge as psycho/somatic remedy in need of remedy.”</p>",

  notebook_id: school.id,
  owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)
Tagging.create(note_id: note.id, tag_id: school_tag.id)
Tagging.create(note_id: note.id, tag_id: english_tag.id)

note = Note.new(
  title: "notes for musc 108 midterm",
  content:
   "<p><strong>Discuss what a cover is, some of the varied results, and give 3 pairs (original and cover) of examples from our listening, reading, or video viewing. (Ruth Brown, Langston Hughes, Ray Charles)</strong></p><p>-1955: “Tweedle Dee” by LaVern Baker (and Winfield Scott) recorded two weeks later by Georgia Gibbs</p><p>-performers didn’t get royalties from covers, writers did; LaVern Baker got bumped off the charts</p><p>-Pat Boone, notorious for bland covers, covers Fats Domino’s “Ain’t That A Shame” and pulls Domino with him into the pop charts, something that Domino publicly thanked him for later.</p><p>-Hughes points to structural inequity in terms of resources (venues, radio, film) as the root of what makes covers unfair, prompted by “Tweedle Dee”</p><p>-Beatles cover Chuck Berry 7 years after the original “Roll Over Beethoven” and has positive effects for royalties and introducing younger people to older music</p><p><br></p><p><strong>The early development of blues (both country and classic) in its original performance contexts and on recordings up through the 1930s. (Crichton, Jones, hooks)</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-blues grew out work songs and the evolution of post-slavery black life</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-increased leisure time</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-new freedom to travel</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-work songs no longer encompassed the experiences of black life</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-less dominance of the church</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-struggle for economic security</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-the use of new musical instruments</p><p>-mississippi delta region</p><p>-the industry saw value there in the early 1920s, starting with Ma Rainey and Bessie Smith, and the 12 bar form.</p><p>-blues singers would tour and perform outside, because they weren’t allowed in theaters.</p><p>-with TOBA, where blues singers’ audience expanded</p><p><br></p><p><strong>The varied use of blues forms in r&amp;b and rock ‘n’ roll (explain at least 4 specific examples).</strong></p><p>-Jump Blues: a smaller jazz ensemble, with a rhythm section, a few horns, and a vocalist Louis Jordan and the Tympani Five “Choo Choo Ch-Boogie”</p><p>-“Mama, he treats your daughter mean” by Ruth Brown uses a 16 bar blues format, aaab</p><p>- Chicago Blues/urban electric blues was where blues went electric with Willie Dixon and Muddy Waters at Chess. Chuck Berry’s Maybellene alternates between straight ahead 12 bar blues chorus and verse</p><p>-Chuck Berry’s Roll Over Beethoven uses the first two lines of the aab form as a verse and the response line as the chorus, which is a lyrical shift.</p><p>-In his autobiography, Ray Charles writes abou thow his music came about as a natural combinbation of spirituals he grew up with and the blues.</p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>The different approaches to music production and artist development between Phil Spector and Berry Gordy.</strong></p><p>-Phil Spector: The saturated Wall of Sound and Gold Star Studios in Los Angeles; apprenticed under Leiber and Stoller at the Brill Building in New York; he was a versatile songwriter in addition to being a producer</p><p>-Both Spector and Berry Gordy (of Motown) produced girl groups. Notable, the Marvelettes, Martha and the Vandellas, and the Supremes (Motown) and the Crystals and the Ronettes</p><p>-Motown was a predominantly black corporation; full in-house production and studio (Hitsville U.S.A.), songwriters, producers, sales, everything. The house band was The Funk Brothers.</p><p>-Motown sound: louder bass, for listening in cars; dynamic basslines, tambourines and handclaps and creative percussion, drew on gospel</p><p><br></p><p><strong>The use of gospel musical styles in a secular context and the most relevant artists we have studied (discuss at least 3 artists). (Ruth Brown, Ray Charles)</strong></p><p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>-soul music; not playing to white sensibilities like motown</p><p>-Ray Charles was the key figure. he says that “Soul is just the way black folk sing when they leave themselves alone.” (Ray Charles in 1978)</p><p>-Sam Cooke: started in a gospel group Soul Stirrers, wanted to change labels but his current label recorded him doing pop, then his group asked them to not release the music anymore because it was “the devil’s music.”</p><p>-Aretha Franklin: grew up singing in church, and befriended Mahalia Jackson and Sam Cooke; she was wasting away at CBS and Atlantic acquired her contract and sent her down to the Fame studio at Muscle Shoals, her sound changed and her career took off.</p><p>-Otis Redding breaks through at the 1967 Monterey Pop festival in Monterey, California</p><p><br></p><p><strong>The significance of Elvis Presley. What were the controversies that surrounded his initial rise to fame from 1955-57, including the negative reactions to rock ‘n’ roll? (Roy, Crosby, Six on Elvis)</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Kicks off Rockabilly at Sun Records in Memphis in July 1954</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-19 top ten hits on pop charts in 1956-1959</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-wide swathes of American youth listened to him.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-22 top ten hits on R&amp;B charts from 1956-1961</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-rumors of a racist comment that were debunked</p><p>-he covered black folks, notably Otis Blackwell, who was well paid for Elvis’s covers of “Don’t Be Cruel” and “All Shook Up”</p><p>-Elvis didn’t hide where his music came from. It was black southern music, and he got it from the black artists and from Reverend Brewster’s Baptist church in Memphis.</p><p><br></p><p><strong>Discuss Payola. What were the differences between Dick Clark and Alan Freed regarding payola? (Bunzel)</strong></p><p>-the main difference is that Alan Freed was arrested for receiving bribes, paid a small fine in 1963, and then died after being indicted for tax evasion.</p><p>-Dick Clark, though he was intensely questioned, emerged unscathed by divesting his industry holdings.</p><p>-Freed took cash bribes; Clark’s operation was much more sophisticated, where his corporate holdings and financial interests profited from his preferential treatment of records and artists that were signed to the record companies and publishing houses that he was invested in.</p><p>-Freed practiced racial equity on his “Moondog House” and “Rock ‘n’ Roll Party”</p><p>-Dick Clark’s American Bandstand was notoriously white; clearly, he wasn’t promoting black folks.</p><p><br></p><p><strong>The urban folk revival in the first half of the 1960s, and the significance and contributions of Bob Dylan. (Time, Willis)</strong></p><p>-First wave was 30’s and 40’s: pete seeger, woody guthrie, the almanac singers, Lead Belly, the Weavers.</p><p>-Seeger blacklisted in the 50’s</p><p>-The release of <em>Anthology of American Folk Music</em> on Folkways label in 1952 was a major event in the re-emergence of folk music</p><p>-Kingston Trio at Purple Onion in San Francisco</p><p>-Key moment is Joan Baez at Newport Folk festival in 1959. First folk star of the generation</p><p>-1963 Newport Folk festival was the high point, and by 1965 performance of Dylan gone electric, that was the end of the era</p><p><br></p><p><strong>The foundations and early growth of the music industry and copyright laws</strong></p><p>-copyright composition and recording; these are the bases on which royalties can be collected</p><p>-licensing covers and samples becomes a way of generating revenue from derivative works.</p><p>-in the 50’s, independent labels began popping up rapidly, filling local niches.</p><p>-record companies moved from northern white audiences to both country and race records.</p><p>-radio (American Bandstand) and television shows (like Ed Sullivan) played an important part in the expansion of the recording industry.</p>",
  notebook_id: school.id,
  owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: school_tag.id)
Tagging.create(note_id: note.id, tag_id: music_tag.id)

note = Note.new(
  title: "moby dick final essay",
  content:
   "<p>The novel’s productive paradox(es)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-attempt to represent totality</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-a book aware of its form, and at the same time flirting with formlessness</p><p><br></p><p>Fragmentation and congomeration and democracy</p><p><br></p><p>Suspension between conclusions, suspension in interpretation</p><p><br></p><p>5/31 - Laughter is a critical force in the novel (Bakhtin) – sharks + queequeg</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-laughter as agent for melting differences</p><p><br></p><p>Bakhtin’s chronotope: how space and time work in specific genres, and how space and time work with representability of different events. The genre that a culture chooses tells us about the rules that govern both the genre and the culture.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-The author navigates the rules in such a way that changes how we see the world.</p><p><br></p><p>Structurally porous diegetic frame</p><p><br></p><p><strong>Mosses Essay</strong></p><p><br></p><p>By imitating, we are using the chronotopes of other cultures, and we should imagine American forms/chronotopes that make it possible to represent authentically and totally the American experience.</p><p>-what is the American experience that he is after? How does that representation work?</p><p><br></p><p>This is a transitional moment between forms.</p><p><br></p><p>As the narrative progresses, we move between locales until we’re on the ship, again with its own rules. How is this a tour of genres?</p><p><br></p><p>The chronotopic rules surrounding diegesis become broken once he is on the ship.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-loss of specific focalization</p><p><br></p><p>Bakhtin: culture’s production, recognition, self-recognition.</p><p><br></p><p>How would you go about changing a chronotope, and thereby changing how America sees itself?</p><p><br></p><p>The range of positions in the crew of the pequod in relation to the goal of the journey produces narrative tension.</p><p><br></p><p>Starbuck, Stubb, Flask. One, two, three. (Queequeg gets a humorous cameo).</p><p><br></p><p>Would a democratic novel represent a straightforward democracy, or would it present it as a problem?</p><p><br></p><p>Characters representing the fundamental contradictions upon which American democracy is built.</p><p><br></p><p>A democratic form must confron the problematics of the democratic system itself. Such is the nature of democracy?</p><p><br></p><p>The clash between losing one’s self and the tyrannical despotism of the will.</p><p><br></p><p>A chronotope that establishes both possibility an impossibility at a given place and time; ideological coordinates; pointing to them and apprehending parts of the chronotope.</p><p><br></p><p>Fluidity and multiplicity of interpretation.</p><p><br></p><p>Contradictions in the foundations of democracy: open freedom and tyranny (1850 America)</p><p><br></p><p>1. Democracy as a state of affairs, a political system (how is a state of affairs represented in a form?)</p><p><br></p><p>2. Democracy as an aspiration, unfinished, ideal</p><p><br></p><p>How does the book mobilize competing schemes of value?</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-do this in the essay. Mobilize.</p><p><br></p><p>Stubb 321 “Man is a money making animal…benevolence.”</p><p><br></p><p>Doubleness: thinking about _____ in two different ways at once.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-democracy</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-doubloon (out of circulation…)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-moby dick</p><p><br></p><p>Starbuck: beware of wholeness and the will to be whole (final act).</p><p><br></p><p>Relationship between theme and form and wholeness.</p><p><br></p><p>Wholes and parts as values and structures that must be considered in relation to how the book works: tension between the whole and the parts.</p><p><br></p><p>Modernity as a loss of opportunity for meaningfulness and wholeness.</p><p><br></p><p>Pleasure and bliss</p><p><br></p><p>Shifting between worldviews as part of the conceptual and political challenge</p><p><br></p><p>The whale has eyes on both sides of its head, does it not?</p><p><br></p><p>To demand and resist interpretation at once.</p><p><br></p><p>Bakhtin: novel defined by internal division.</p><p><br></p><p><strong>Holding oppositions in suspension.</strong></p><p><br></p><p><strong>Holding in suspension how things are and how things should be.</strong></p><p><strong>&nbsp;</strong></p><p><strong>Using what’s structurally specific about the novel to comment on what’s historically significant about America.</strong></p><p><strong>&nbsp;</strong></p><p><strong>&nbsp;</strong></p><p><strong>&nbsp;</strong></p><p><strong>Starbuck: religious principle</strong></p><p><strong>Stubb: fatalism</strong></p><p><strong>Flask: whaling and monetary gain.</strong></p>",
   notebook_id: school.id,
    owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: school_tag.id)
Tagging.create(note_id: note.id, tag_id: english_tag.id)

note = Note.new(
  title: "terre incognita ",
  content:
   "<p>rowan ricardo philips - the ground</p><p><br></p><p><strong>TERRE INCOGNITA&nbsp;</strong></p><p>I plugged my poem into a manhole cover</p><p>That flamed into the first guitar,</p><p>Jarred the asphalt and tar to ash,</p><p>And made from where there once was</p><p>Ground a sound instead to stand on.</p>",
   notebook_id: poetry.id,
    owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: school_tag.id)
Tagging.create(note_id: note.id, tag_id: english_tag.id)

note = Note.new(
  title: "breathing underwater",
  content:
   "<p>The words</p><p>In water</p><p>The words</p><p>In water</p><p><br></p><p>Material</p><p>Slowly unwind</p><p>As I leave feathers behind</p><p>For your love</p><p>For your lover to find</p><p><br></p><p>Warm hands</p><p>Wrapped in blue linen</p><p>From Torrington</p><p>For your love</p><p>For your lover to find</p><p><br></p><p>Wild rose</p><p>Jericho sun</p><p>And, everyday stone</p><p>For your love</p><p>For your lover to find</p><p><br></p><p>Aorta</p><p>Tied to the artery</p><p>With a cute artistry</p><p>For your love</p><p>For your lover to</p><p>Find</p><p><br></p><p>Breathing, breathing underwater</p><p>Bre-Breathing</p><p>Breathing underwater</p><p><br></p><p>Pleasure</p><p>Melting your snowflake</p><p>Of lace down your face</p><p>For your love</p><p>For your lover to find</p><p><br></p><p>I could</p><p>Call your demons aside</p><p>Soak them in</p><p>Chamomile</p><p>For your love</p><p>For your lover</p><p>To find</p><p><br></p><p>Breathing, breathing underwater</p><p>I could</p><p>Bre-Brea</p><p>Breathe underwater</p><p>To find</p><p><br></p><p>For your love, for your lover to find</p><p>Breathing underwater</p><p>For your love</p><p>For your lover</p><p><br></p><p>Your love</p><p>For your love, woah oh</p><p>For your love</p><p>For your lover</p><p>Your love</p><p>For your love, woah oh</p><p>For your love</p><p>For your lover</p><p>Your love</p><p>For your love, woah oh</p><p>For your love</p><p>For your lover</p><p>Your love</p><p>For your love, woah oh</p><p>For your love</p><p>For your lover</p><p>For your love</p><p>For your lover</p><p>For your love</p><p>For your lover</p><p>For your love</p><p>For your lover</p><p>I want you to breathe it in</p><p>The words</p><p>In water</p><p>The words</p><p>In water</p>",
    notebook_id: lyrics.id,
    owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: lyrics_tag.id)

note = Note.new(
  title: "nakamarra",
  content:
   "<p>Hannah my darling I will follow you into the sunrise under desert sky</p><p>We fly, rise together with our hearts upon our sleeves for all to see</p><p>We two will breathe, aqua queen though vast distance between us, heart sails with love</p><p>For you, I love you, I love you I do</p><p>Love you, I love you, I love you I do</p><p>Nakamarra sweet red earth will hold you like the strength you bless to me</p><p>True we engage humility, watch me struggle with your words however truthful they may be</p><p>We'll see in time, opening our hearts and nurturing our minds to shine</p><p>I love you, love you, I love you I do</p><p>Love you, I love you, I love you I do,</p><p>Oh it sets our hearts to fire, sweeps you and I</p><p>Honey don't you, know it sets our heart to fire, sweeps you and I</p><p>Honey don't you, know we two will pulse love in through this light</p><p>Honey don't you, know we two will pulse,</p><p>I'll always love you, love you, love you I do</p><p>Love you, I love you, I love you I do</p><p>Hannah my darling I will follow you into the sunrise under desert sky</p><p>We fly, rise together with our hearts upon our sleeves for all to see</p><p>We two will breathe, aqua queen tho vast distance between us, heart sails with love</p><p>For you, I love you, I love you I do</p><p>Love you, I love you, I love you I do</p><p>Oh it sets our hearts to fire, sweeps you and I</p><p>Honey don't you, know it sets our heart to fire, sweeps you and I</p><p>Honey don't you, know we two will pulse love in through this light</p><p>Honey don't you, know we two will pulse,</p><p>I'll always love you love you love you I do</p><p>Love you I love you I love you I do</p>",
   notebook_id: lyrics.id,
    owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: lyrics_tag.id)

note = Note.new(
  title: "life is fine",
  content:
   "<p>Life is Fine</p><p>Langston Hughes, 1902 - 1967</p><p><br></p><p>&nbsp;I went down to the river,</p><p>I set down on the bank.</p><p>I tried to think but couldn’t,</p><p>So I jumped in and sank.</p><p><br></p><p>I came up once and hollered!</p><p>I came up twice and cried!</p><p>If that water hadn’t a-been so cold</p><p>I might’ve sunk and died.</p><p><br></p><p>&nbsp;&nbsp;&nbsp;<em>But it was&nbsp;&nbsp;&nbsp;Cold in that water!&nbsp;&nbsp;&nbsp;It was cold!</em></p><p><br></p><p>I took the elevator</p><p>Sixteen floors above the ground.</p><p>I thought about my baby</p><p>And thought I would jump down.</p><p><br></p><p>I stood there and I hollered!</p><p>I stood there and I cried!</p><p>If it hadn’t a-been so high</p><p>I might’ve jumped and died.</p><p><br></p><p>&nbsp;&nbsp;&nbsp;<em>But it was&nbsp;&nbsp;&nbsp;High up there!&nbsp;&nbsp;&nbsp;It was high!</em></p><p><br></p><p>So since I’m still here livin’,</p><p>I guess I will live on.</p><p>I could’ve died for love—</p><p>But for livin’ I was born</p><p><br></p><p>Though you may hear me holler,</p><p>And you may see me cry—</p><p>I’ll be dogged, sweet baby,</p><p>If you gonna see me die.</p><p><br></p><h1>&nbsp;&nbsp;&nbsp;Life is fine!&nbsp;&nbsp;&nbsp;Fine as wine!&nbsp;&nbsp;&nbsp;Life is fine!</h1>",
   notebook_id: poetry.id,
    owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: school_tag.id)
Tagging.create(note_id: note.id, tag_id: english_tag.id)

note = Note.new(
  title: "embrace the night and get thee gone",
  content:
   "<p>rowan ricardo philips - the ground</p><p><br></p><p><strong>EMBRACE THE NIGHT AND GET THEE GONE&nbsp;</strong></p><p>Talking picture. Silent poem.</p><p>New York shakes off the fall.</p><p>Tonight</p><p>I work in a silence</p><p>That prays the rare turn to sound.</p><p>I make nothing. I am fractured.</p><p>I walk in the dark egg of</p><p>Another September night</p><p>That is cool, that is</p><p>Cool as though the moon is a mouth</p><p>That blows on its wound.</p><p>We are early in the life of the poet.</p><p>He knows so little of light,</p><p>So little of shadow. He knows down</p><p>Town as a metaphor. He knows</p><p>The constellations are at work tonight</p><p>Whoring their stories of strife.</p><p>He’s in search of life. A poem’s</p><p>In search of its body. Down</p><p>Toward the river.</p><p>The skyline</p><p>Broaches its phalanx of broken teeth</p><p>And up above the grounded sky the sky grinds down the stars.</p><p>And up above in the grounded sky the sky grinds down. The stars</p><p>Broach its phalanx of broken teeth.</p><p>The skyline</p><p>Toward the river</p><p>Searches for its body: downed,</p><p>Dammed up, beached; like the end of a poem</p><p>Walled up against competitive life.</p><p>The constellations are at work tonight.</p><p><em>Betelgeuse</em>.&nbsp;<em>Bellatrix</em>. The hunter’s bow</p><p>In elegy graffitied across the endless black gate.</p><p>We know so little of light:</p><p>It dies though we are early in its life.</p><p>A beautiful night. Its lambent moon</p><p>Lets down a light hat only happens in September.</p><p>Say it.&nbsp;<em>September</em>. Fragile</p><p>As an egg now. Teetering. Parabolic.</p><p>Broken teeth in the mouth</p><p>That prays the rare turn to sound<strong>.</strong></p><p>I work through the silence.</p><p>Tonight</p><p>New York shakes off the fall.</p><p>Silent poem. Talking picture.</p><p>Embrace the night and get thee gone.</p>",
      notebook_id: poetry.id,
      owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: school_tag.id)
Tagging.create(note_id: note.id, tag_id: english_tag.id)

note = Note.new(
  title: "shakshuka",
  content:
   "<h3>INGREDIENTS</h3><ul><li><strong>3</strong>&nbsp;<strong>tablespoons&nbsp;extra-virgin olive oil</strong></li><li><strong>1</strong>&nbsp;<strong>large&nbsp;onion, halved and thinly sliced</strong></li><li><strong>1</strong>&nbsp;<strong>large&nbsp;red bell pepper, seeded and thinly sliced</strong></li><li><strong>3</strong>&nbsp;<strong>garlic&nbsp;cloves, thinly sliced</strong></li><li><strong>1</strong>&nbsp;<strong>teaspoon ground&nbsp;cumin</strong></li><li><strong>1</strong>&nbsp;<strong>teaspoon&nbsp;sweet paprika</strong></li><li><strong>⅛</strong>&nbsp;<strong>teaspoon&nbsp;cayenne, or to taste</strong></li><li><strong>1</strong>&nbsp;<strong>(28-ounce) can whole plum&nbsp;tomatoes&nbsp;with juices, coarsely chopped</strong></li><li><strong>¾</strong>&nbsp;<strong>teaspoon&nbsp;salt, more as needed</strong></li><li><strong>¼</strong>&nbsp;<strong>teaspoon&nbsp;black pepper, more as needed</strong></li><li><strong>5</strong>&nbsp;<strong>ounces&nbsp;feta cheese, crumbled (about 1 1/4 cups)</strong></li><li><strong>6</strong>&nbsp;<strong>large&nbsp;eggs</strong></li><li>&nbsp;<strong>Chopped&nbsp;cilantro, for serving</strong></li><li>&nbsp;<strong>Hot sauce, for serving</strong></li></ul><p></p><ol><li>Heat oven to 375 degrees.</li><li>Heat oil in a large skillet over medium-low heat. Add onion and bell pepper. Cook gently until very soft, about 20 minutes. Add garlic and cook until tender, 1 to 2 minutes; stir in cumin, paprika and cayenne, and cook 1 minute. Pour in tomatoes and season with 3/4 teaspoon salt and 1/4 teaspoon pepper; simmer until tomatoes have thickened, about 10 minutes. Stir in crumbled feta.</li><li>Gently crack eggs into skillet over tomatoes. Season with salt and pepper. Transfer skillet to oven and bake until eggs are just set, 7 to 10 minutes. Sprinkle with cilantro and serve with hot sauce.</li></ol><p><br></p><p>from: https://cooking.nytimes.com/recipes/1014721-shakshuka-with-feta</p>",
   notebook_id: recipes.id,
    owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: recipe_tag.id)

note = Note.new(
  title: "watermelon mint feta salad",
  content:
   "<h3><br></h3><h3>Description</h3><p>This refreshing salad with watermelon, feta cheese, and fresh mint is simply dressed with olive oil and lime juice. Perfect for summer.</p><h3>Ingredients</h3><ul><li>8&nbsp;lb.&nbsp;whole seedless watermelon,&nbsp;chilled (about 12 cups of cubed fruit)</li><li>1/2&nbsp;cup&nbsp;extra virgin olive oil</li><li>3&nbsp;whole&nbsp;limes,&nbsp;juiced</li><li>1 1/2&nbsp;tsp&nbsp;salt</li><li>3/4&nbsp;tsp&nbsp;black pepper</li><li>1&nbsp;cup&nbsp;fresh mint leaves,&nbsp;chopped</li><li>1 1/2&nbsp;cups&nbsp;crumbled feta cheese&nbsp;(sheep's milk feta preferred)</li></ul><p><br></p><p><img src=\"https://toriavey.com/images/2011/06/IMG_9499-960x720.jpg\"></p><p><br></p><p><a href=\"https://toriavey.com/toris-kitchen/watermelon-feta-salad-with-mint/#\" target=\"_blank\" style=\"color: rgb(13, 114, 199);\"><strong>US Customary</strong></a>&nbsp;-&nbsp;<a href=\"https://toriavey.com/toris-kitchen/watermelon-feta-salad-with-mint/#\" target=\"_blank\" style=\"color: rgb(13, 114, 199);\">Metric</a></p><h3>Instructions</h3><ol><li>Note: This salad is best made just prior to serving. Prepare one hour or less before your meal.</li><li>Cut rind from the watermelon, then chop the fruit into 1 inch chunks. Place chunks in a colander to drain as your chop.</li><li>image: https://toriavey.com/images/2011/06/Watermelon-Feta-Mint-Salad-1-1.jpg</li><li><br></li><li><br></li><li>In a small bowl, whisk together olive oil, fresh lime juice, salt, and black pepper to create a dressing.</li><li>image: https://toriavey.com/images/2011/06/Watermelon-Feta-Mint-Salad-2-1.jpg</li><li><br></li><li><br></li><li>Place watermelon in a large salad bowl. Pour dressing and chopped mint over the watermelon and toss gently to coat. Pour the crumbled feta into the salad bowl and stir gently to integrate the cheese into the salad. Serve.</li></ol><p><br></p><p><span style=\"color: rgb(0, 0, 0);\">from: https://toriavey.com/toris-kitchen/watermelon-feta-salad-with-mint/#jR4krf5oFclPXpj9.99</span></p>",
   notebook_id: recipes.id,
    owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: recipe_tag.id)

note = Note.new(
  title: "sourdough",
  content:
   "<h2>Ingredients</h2><h2><br></h2><ul><li>1 1/2 teaspoons&nbsp;<a href=\"https://www.kingarthurflour.com/shop/items/saf-red-instant-yeast-16-oz\" target=\"_blank\" style=\"color: rgb(223, 122, 28);\">instant yeast</a></li><li>1 1/2 teaspoons salt</li><li>1 1/2 teaspoons sugar</li><li>2 1/2 cups&nbsp;<a href=\"https://www.kingarthurflour.com/shop/items/king-arthur-unbleached-all-purpose-flour-5-lb\" target=\"_blank\" style=\"color: rgb(223, 122, 28);\">King Arthur Unbleached All-Purpose Flour</a></li><li>2 cups \"fed\"&nbsp;<a href=\"https://www.kingarthurflour.com/shop/items/classic-fresh-sourdough-starter-1-oz\" target=\"_blank\" style=\"color: rgb(223, 122, 28);\">sourdough starter</a></li><li>1/2 cup lukewarm water</li></ul><h2><br></h2><p><img src=\"https://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/how_to_make_sourdough_08213_16x9.jpg\"></p><p><br></p><p><br></p><p><br></p><p><br></p><h2>Instructions</h2><ol><li>Combine all the ingredients and mix and knead — by hand, mixer, or bread machine — to make a soft, smooth dough; about 15 to 20 minutes by hand, 7 to 10 minutes in a mixer, and 20 to 30 minutes in a bread machine.</li><li>Place the dough in a lightly greased bowl and let it rise for 45 to 60 minutes, until puffy but not necessarily doubled in bulk.</li><li>Lightly grease a 9\" x 5\" loaf pan.</li><li>On a lightly greased work surface, gently deflate the dough, and form it into a 9\" log. Place the log in the prepared pan, cover, and let it rise for 60 to 90 minutes, until it crests about 1\" over the rim of the pan.</li><li>Preheat the oven to 350°F.</li><li>Bake the bread for 40 to 50 minutes, until it's light gold and a digital thermometer inserted into the center reads 190°F.</li><li>Remove the bread from the oven, and after a couple of minutes turn it out of the pan onto a rack to cool. Store, well-wrapped, at room temperature for several days; freeze for longer storage.</li></ol><p><br></p><p>from: https://www.kingarthurflour.com/recipes/basic-sourdough-bread-recipe</p>",
   notebook_id: recipes.id,
    owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: recipe_tag.id)

note = Note.new(
  title: "overheard on bart",
  content:
   "<p><span class=\"ql-font-serif\">\"don't count all your eggs in one basket before they hatch\"</span></p><p><br></p><p><span class=\"ql-font-serif\">\"a bird in the hand is worth two killed with one stone\"</span></p><p><br></p><p><span class=\"ql-font-serif\">\"never watch a boiling pot\"</span></p>",
    notebook_id: default.id,
    owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: quotes_tag.id)

note = Note.new(
  title: "to do",
  content:
   "<p><span class=\"ql-font-serif\">-bake bread</span></p><p><span class=\"ql-font-serif\">-call Asa and David</span></p><p><span class=\"ql-font-serif\">-write ENGL 209 essay</span></p><p><span class=\"ql-font-serif\">-workout</span></p>",
    notebook_id: default.id,
    owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

note = Note.new(
  title: "amazing facts about the gecko",
  content:
   "<p>1. Geckos' amazing toes help them stick to any surface except Teflon.</p><p><br></p><p>2. Geckos' eyes are 350 times more sensitive to light than human eyes.</p><p><br></p><p>3. Geckos are able to produce various sounds for communication, including barks, chirps and clicks.</p><p><br></p><p>4. Some species of geckos have no legs and look more like snakes.</p><p><br></p><p>5. Most geckos can detach their tails — and regrow them later if necessary.</p><p><br></p><p>6. Geckos use their tails to store fat and nutrients for lean times.</p><p><br></p><p>7. Geckos are masters of color.</p><p><br></p><p>8. The smallest gecko species is less than 2 centimeters in length.</p><p><br></p><p><br></p><p><br></p><p>source: https://www.mnn.com/earth-matters/animals/stories/surprising-facts-about-geckos</p>",
   notebook_id: default.id,
    owner_id: user1.id)
note.save
update_at = update_at = DateTime.new(
    2017,
    11,
    30,
    12,
    0,
    0
  )
note.update_attributes(updated_at: update_at)

note = Note.new(
  title: "tacos",
  content:
   "<h2>What You'll Need</h2><ul><li>2-pound skirt or flank steak (trimmed of membranes and excess fat)</li><li>1/2 cup red chile sauce</li><li>1 teaspoon cumin</li><li>3 cloves of garlic (peeled and minced)</li><li>1/2 teaspoon salt</li><li>1 lime (juiced)</li><li>20 small white corn tortillas</li><li>1 cup diced onion</li><li>1 cup cilantro leaves (chopped)</li><li>1/2 cup salsa (or chile sauce)</li><li>Optional: 10 squares of foil</li></ul><p><br></p><p><img src=\"https://fthmb.tqn.com/XaN-tyulXyl8a5jaclN2wNj4WaU=/960x0/filters:no_upscale()/86526804-56a615455f9b58b7d0dfd14f.jpg\" alt=\"Carne asada tacos\"></p><p><br></p><h2>How to Make It</h2><ol><li>Pat the beef dry with paper towels and put it in a large glass dish. Whisk together the chile sauce, cumin, garlic, salt and lime juice. Pour it over the beef and use a brush or your fingers to coat the meat entirely. Marinate the meat at room temperature for about 30 minutes.</li><li>Cook the beef over medium heat on the grill to medium or your preferred temperature. Set the&nbsp;<a href=\"https://www.thespruce.com/carne-asada-mexican-steak-331500\" target=\"_blank\" style=\"color: rgb(0, 143, 185); background-color: transparent;\">carne asada</a>&nbsp;aside.</li><li>Steam the&nbsp;<a href=\"https://www.thespruce.com/step-by-step-corn-tortillas-by-hand-2343042\" target=\"_blank\" style=\"color: rgb(0, 143, 185); background-color: transparent;\">corn tortillas</a>&nbsp;by wrapping them in a damp towel and heating them in a 250 F oven for 15 minutes, or in batches of five tortillas in a microwave for two minutes.</li><li>While the tortillas warm, cut the&nbsp;<a href=\"https://www.thespruce.com/skirt-steak-definition-336259\" target=\"_blank\" style=\"color: rgb(0, 143, 185); background-color: transparent;\">skirt steak</a>&nbsp;against the grain into approximately 1/2-inch-thick strips.&nbsp;Stack two tortillas one on top of the other in a square of foil or on a plate and top with three or four strips of meat, and chopped onions, cilantro and chile sauce or salsa to taste. Enjoy the tacos immediately, or wrap them in the foil and eat them within 20 minutes.</li></ol><p><br></p><p>from: https://www.thespruce.com/carne-asada-tacos-2342679</p>",
   notebook_id: recipes.id,
    owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: recipe_tag.id)

note = Note.new(
  title: "the jabberwocky",
  content:
   "<p>Jabberwocky</p><p>Lewis Carroll</p><p><br></p><p>’Twas brillig, and the slithy toves&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Did gyre and gimble in the wabe:&nbsp;</p><p>All mimsy were the borogoves,&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And the mome raths outgrabe.&nbsp;</p><p><br></p><p>“Beware the Jabberwock, my son!&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The jaws that bite, the claws that catch!&nbsp;</p><p>Beware the Jubjub bird, and shun&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The frumious Bandersnatch!”&nbsp;</p><p><br></p><p>He took his vorpal sword in hand;&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Long time the manxome foe he sought—&nbsp;</p><p>So rested he by the Tumtum tree&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And stood awhile in thought.&nbsp;</p><p><br></p><p>And, as in uffish thought he stood,&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Jabberwock, with eyes of flame,&nbsp;</p><p>Came whiffling through the tulgey wood,&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And burbled as it came!&nbsp;</p><p><br></p><p>One, two! One, two! And through and through&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The vorpal blade went snicker-snack!&nbsp;</p><p>He left it dead, and with its head&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He went galumphing back.&nbsp;</p><p><br></p><p>“And hast thou slain the Jabberwock?&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Come to my arms, my beamish boy!&nbsp;</p><p>O frabjous day! Callooh! Callay!”&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He chortled in his joy.&nbsp;</p><p><br></p><p>’Twas brillig, and the slithy toves&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Did gyre and gimble in the wabe:&nbsp;</p><p>All mimsy were the borogoves,&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And the mome raths outgrabe.</p>",
      notebook_id: default.id,
    owner_id: user1.id)
note.save
update_at = update
note.update_attributes(updated_at: update_at)

Shortcut.create(
  owner_id: user1.id,
  shortcuttable_type: "Note",
  shortcuttable_id: note.id,
)

note = Note.new(
  title: "simple debounce function",
  content:
   "<p>handleChange(e) {</p><p class=\"ql-indent-1\">this.setState({</p><p class=\"ql-indent-2\">[e.target.name]: e.target.value</p><p class=\"ql-indent-1\">});</p><p class=\"ql-indent-1\">e.currentTarget.focus();</p><p class=\"ql-indent-1\">if (this.props.note) {</p><p class=\"ql-indent-2\">clearTimeout(this.debounceTimer);</p><p class=\"ql-indent-2\">this.debounceTimer = setTimeout(() =&gt; {</p><p class=\"ql-indent-3\">this.props.patchNote(this.state);</p><p class=\"ql-indent-2\">}, 4000);</p><p class=\"ql-indent-1\">}</p><p>}</p><p><br></p><p>source: the autosave functionality for this text area</p>",
    notebook_id: default.id,
    owner_id: user1.id)
note.save
update_at = DateTime.new(
    2017,
    12,
    1,
    11,
    0,
    0
  )
note.update_attributes(updated_at: update_at)

Tagging.create(note_id: note.id, tag_id: code_tag.id)
Shortcut.create(
  owner_id: user1.id,
  shortcuttable_type: "Note",
  shortcuttable_id: note.id,
)
