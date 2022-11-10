const listTips = [
  {
    idTips: 1,
    Judul:
      "1. Basis makanan Anda pada karbohidrat bertepung serat yang lebih tinggi",
    image:
      "https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ftips%2Fengin-akyurt-eH7B2b5cCUg-unsplash.jpg?alt=media&token=c515dc17-271c-4875-ab43-f6a9d26f0434",
    tips: "Karbohidrat bertepung harus membuat lebih dari sepertiga dari makanan yang Anda makan. Mereka termasuk kentang, roti, nasi, pasta dan sereal. Pilih jenis serat atau gandum utuh yang lebih tinggi, seperti pasta gandum utuh, beras merah, atau kentang dengan kulitnya. Mereka mengandung lebih banyak serat daripada karbohidrat bertepung putih atau halus dan dapat membantu Anda merasa kenyang lebih lama. Cobalah untuk memasukkan setidaknya 1 makanan bertepung dengan setiap makanan utama. Beberapa orang berpikir makanan bertepung menggemukkan, tetapi gram demi gram karbohidrat yang dikandungnya menyediakan kurang dari setengah kalori lemak. Perhatikan lemak yang Anda tambahkan saat memasak atau menyajikan jenis makanan ini karena itulah yang meningkatkan kandungan kalori – misalnya, minyak pada keripik, mentega pada roti, dan saus krim pada pasta.",
  },
  {
    idTips: 2,
    Judul: "2. Makan banyak buah dan sayuran",
    image:
      "https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ftips%2Fnathan-dumlao-SlUoDl_SBMs-unsplash.jpg?alt=media&token=7184c539-9bf0-4eb6-a9aa-162c7d56d6a7",
    tips: "Dianjurkan agar Anda makan setidaknya 5 porsi berbagai buah dan sayuran setiap hari. Porsi buah dan sayuran segar, kalengan atau beku adalah 80g. Porsi buah kering (yang harus disimpan pada waktu makan) adalah 30g. Segelas 150ml jus buah, jus sayuran, atau smoothie juga dihitung sebagai 1 porsi, tetapi batasi jumlah yang Anda miliki tidak lebih dari 1 gelas sehari karena minuman ini mengandung gula dan dapat merusak gigi Anda.",
  },
  {
    idTips: 3,
    Judul: "3. Makan lebih banyak ikan, termasuk porsi ikan berminyak",
    image:
      "https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ftips%2Fmike-bergmann-tHjXXy1kk_Q-unsplash.jpg?alt=media&token=f8c02d55-a126-42fe-b9f2-9bc3206d63e1",
    tips: "Ikan merupakan sumber protein yang baik dan mengandung banyak vitamin dan mineral. Usahakan untuk makan setidaknya 2 porsi ikan dalam seminggu, termasuk setidaknya 1 porsi ikan berminyak. Ikan berminyak kaya akan lemak omega-3, yang dapat membantu mencegah penyakit jantung.",
  },
  {
    idTips: 4,
    Judul: "4. Kurangi lemak jenuh dan gula",
    image:
      "https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ftips%2Fmae-mu-yLvmu_oqiZQ-unsplash.jpg?alt=media&token=4fa2736f-d441-4e04-bd0f-40bdfed72720",
    tips: "Anda membutuhkan sedikit lemak dalam diet Anda, tetapi penting untuk memperhatikan jumlah dan jenis lemak yang Anda makan. Ada 2 jenis utama lemak: jenuh dan tidak jenuh. Terlalu banyak lemak jenuh dapat meningkatkan jumlah kolesterol dalam darah, yang meningkatkan risiko penyakit jantung. Rata-rata, pria tidak boleh memiliki lebih dari 30 gram lemak jenuh sehari. Rata-rata, wanita tidak boleh memiliki lebih dari 20g lemak jenuh sehari. Anak-anak di bawah usia 11 tahun harus memiliki lebih sedikit lemak jenuh daripada orang dewasa, tetapi diet rendah lemak tidak cocok untuk anak-anak di bawah 5 tahun. Mengkonsumsi makanan dan minuman tinggi gula secara teratur meningkatkan risiko obesitas dan kerusakan gigi. Makanan dan minuman manis seringkali tinggi energi (diukur dalam kilojoule atau kalori), dan jika dikonsumsi terlalu sering dapat berkontribusi pada penambahan berat badan. Mereka juga dapat menyebabkan kerusakan gigi, terutama jika dimakan di antara waktu makan.",
  },
  {
    idTips: 5,
    Judul:
      "5. Makan lebih sedikit garam: tidak lebih dari 6g sehari untuk orang dewasa",
    image:
      "https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ftips%2Fpavel-neznanov-f6cVTolEhQE-unsplash.jpg?alt=media&token=3046d468-631f-4880-a69d-26b6d36263ab",
    tips: " Makan terlalu banyak garam dapat meningkatkan tekanan darah Anda. Orang dengan tekanan darah tinggi lebih mungkin untuk mengembangkan penyakit jantung atau stroke. Bahkan jika Anda tidak menambahkan garam ke makanan Anda, Anda mungkin masih makan terlalu banyak. Sekitar tiga perempat dari garam yang Anda makan sudah ada dalam makanan saat Anda membelinya, seperti sereal sarapan, sup, roti, dan saus.",
  },
  {
    idTips: 6,
    Judul: "6. Beraktifitas dan jadilah berat badan yang sehat",
    image:
      "https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ftips%2Fanastase-maragos-FP7cfYPPUKM-unsplash.jpg?alt=media&token=cfb3e014-b6ef-41d2-899a-dceedc62e601",
    tips: "Selain makan sehat, olahraga teratur dapat membantu mengurangi risiko terkena kondisi kesehatan yang serius. Ini juga penting untuk kesehatan dan kesejahteraan Anda secara keseluruhan. Kelebihan berat badan atau obesitas dapat menyebabkan kondisi kesehatan, seperti diabetes tipe 2, kanker tertentu, penyakit jantung dan stroke. Kekurangan berat badan juga dapat mempengaruhi kesehatan Anda.",
  },
  {
    idTips: 7,
    Judul: "7. Jangan sampai haus",
    image:
      "https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ftips%2Fengin-akyurt-PCpoG06fcUI-unsplash.jpg?alt=media&token=b57adfac-580b-4f4a-abe4-39464c85f7e4",
    tips: "Anda perlu minum banyak cairan untuk menghentikan Anda mengalami dehidrasi. Pemerintah menganjurkan minum 6 sampai 8 gelas setiap hari. Ini selain cairan yang Anda dapatkan dari makanan yang Anda makan. Semua minuman non-alkohol dihitung, tetapi air, susu rendah lemak, dan minuman rendah gula, termasuk teh dan kopi, adalah pilihan yang lebih sehat. Cobalah untuk menghindari minuman manis dan bersoda, karena mengandung kalori yang tinggi. Mereka juga buruk untuk gigi Anda.",
  },
  {
    idTips: 8,
    Judul: "8. Jangan lewatkan sarapan",
    image:
      "https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ftips%2Fben-kolde-FFqNATH27EM-unsplash.jpg?alt=media&token=9948212d-6457-4852-b6e0-943302bb94c2",
    tips: "Beberapa orang melewatkan sarapan karena mereka pikir itu akan membantu mereka menurunkan berat badan. Tetapi sarapan sehat yang tinggi serat dan rendah lemak, gula dan garam dapat menjadi bagian dari diet seimbang, dan dapat membantu Anda mendapatkan nutrisi yang Anda butuhkan untuk kesehatan yang baik. Sereal gandum rendah gula dengan susu semi-skim dan buah yang diiris di atasnya adalah sarapan yang lezat dan sehat.",
  },
];

export default listTips;
