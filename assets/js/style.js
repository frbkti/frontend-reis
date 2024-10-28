var homeLink = document.getElementById('home-link');

  // Tambahkan event listener untuk klik
  homeLink.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah default link behavior

    // Hapus kelas active dari semua link (jika ada elemen lain)
    var activeLinks = document.querySelectorAll('.active');
    activeLinks.forEach(function(link) {
      link.classList.remove('active');
    });

    // Tambahkan kelas active ke elemen yang diklik
    homeLink.classList.add('active');
  });

 


  document.addEventListener('DOMContentLoaded', function() {
    const pricePerPax = 150000; // Harga per tiket

    function setupCard(cardIndex) {
        let ticketInput = document.getElementById(`numberOfTickets${cardIndex}`);
        let totalPaxElement = document.getElementById(`totalPax${cardIndex}`);
        let totalPriceElement = document.getElementById(`totalPrice${cardIndex}`);

        document.getElementById(`increaseTicket${cardIndex}`).addEventListener('click', function() {
            let currentValue = parseInt(ticketInput.value);
            if (currentValue < 6) {
                currentValue++;
                ticketInput.value = currentValue;
                totalPaxElement.innerText = currentValue;
                totalPriceElement.innerText = formatRupiah(currentValue * pricePerPax);
            }
        });

        document.getElementById(`decreaseTicket${cardIndex}`).addEventListener('click', function() {
            let currentValue = parseInt(ticketInput.value);
            if (currentValue > 0) {
                currentValue--;
                ticketInput.value = currentValue;
                totalPaxElement.innerText = currentValue;
                totalPriceElement.innerText = formatRupiah(currentValue * pricePerPax);
            }
        });
    }

    // Setup untuk kedua card
    setupCard(1);
    setupCard(2);

    // Fungsi untuk memformat angka ke dalam format mata uang rupiah
    function formatRupiah(angka) {
        let reverse = angka.toString().split('').reverse().join('');
        let ribuan = reverse.match(/\d{1,3}/g);
        return ribuan.join('.').split('').reverse().join('');
    }
});


    let timeLeft = 0.1 * 60;

    // Fungsi untuk memperbarui tampilan timer
    function updateTimer() {
        // Hitung menit dan detik yang tersisa
        let hours = Math.floor(timeLeft / 60);
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

         // Tambahkan angka nol di depan jika jam kurang dari 10
         hours = hours < 10 ? '0' + hours : hours;
        // Tambahkan angka nol di depan jika menit kurang dari 10
        minutes = minutes < 10 ? '0' + minutes : minutes;
      
        // Tambahkan angka nol di depan jika detik kurang dari 10

        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Perbarui elemen HTML dengan waktu yang tersisa
        document.getElementById('timer').textContent = `00:${minutes}:${seconds}`;

        // Kurangi waktu yang tersisa
        timeLeft--;

        // Jika waktu habis, alihkan ke halaman "Payment Failed"
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = "00:00:00";
            // Redirect ke halaman "Payment Failed"
            window.location.href = "/villa-resort/orderfailed.html"; // Ganti dengan URL yang sesuai
        }
    }
    const timerInterval = setInterval(updateTimer, 1000);


     // Fungsi untuk menyalin value ke clipboard
     function copyToClipboard(elementId) {
      // Mendapatkan elemen input berdasarkan ID
      const copyText = document.getElementById(elementId);
      
      // Memilih teks di dalam input
      copyText.select();
      copyText.setSelectionRange(0, 99999); // Untuk mobile devices
      
      // Menyalin teks ke clipboard
      document.execCommand("copy");

      // Memberikan feedback (opsional)
      alert("Copied: " + copyText.value);
  }

  function formatDate(date) {
    // Array nama hari dan bulan
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Ambil komponen tanggal, bulan, tahun, jam, dan menit
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    // Gabungkan semua menjadi satu string
    return `${dayName} ${day} ${month} ${year} ${hours}:${minutes}`;
}

function updateDateTime() {
    // Ambil waktu sekarang
    const now = new Date();

    // Tambahkan 15 menit ke waktu sekarang
    const futureTime = new Date(now.getTime());
    futureTime.setMinutes(futureTime.getMinutes() + 15);

    // Format tanggal dan waktu untuk timer (15 menit ke depan)
    const formattedFutureDateTime = formatDate(futureTime);
    document.getElementById('date-time').textContent = formattedFutureDateTime + " WIB";

    // Format tanggal dan waktu untuk saat ini
    const formattedNowDateTime = formatDate(now);
    document.getElementById('now-date-time').textContent = formattedNowDateTime + " WIB";
}

// Jalankan fungsi untuk update tanggal dan waktu saat halaman dimuat
window.onload = updateDateTime;

// function formatDate(date) {
//   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   const dayName = days[date.getDay()]; // Nama hari
//   const day = date.getDate(); // Tanggal
//   const month = months[date.getMonth()]; // Nama bulan
//   const year = date.getFullYear(); // Tahun
//   const hours = date.getHours(); // Jam
//   const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(); // Menit dengan leading zero

//   return `${dayName}, ${day} ${month} ${year} ${hours}:${minutes}`;
// }

// function displayCurrentDateTime() {
//   const now = new Date(); // Ambil waktu sekarang
//   const formattedDateTime = formatDate(now); // Format tanggal dan waktu
//   document.getElementById('now-date-time').textContent = formattedDateTime; // Tampilkan di elemen <p>
// }

// // Jalankan fungsi untuk menampilkan tanggal dan waktu saat halaman dimuat
// window.onload = displayCurrentDateTime;


//  const countries = [
//             { name: "Indonesia", code: "+62", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg" },
//             { name: "Amerika Serikat", code: "+1", flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" },
//             { name: "Inggris", code: "+44", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_the_United_Kingdom.svg" },
//             { name: "Australia", code: "+61", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg" },
//             { name: "India", code: "+91", flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" },
//             // Tambahkan negara lain sesuai kebutuhan
//         ];

//         const countryCodeSelect = document.getElementById('countryCode');
//         const countryFlag = document.getElementById('countryFlag');

//         // Mengisi opsi negara ke dropdown
//         countries.forEach(country => {
//             const option = document.createElement('option');
//             option.value = country.code;
//             option.textContent = `${country.name} (${country.code})`;
//             countryCodeSelect.appendChild(option);
//         });

//         // Mengupdate bendera saat negara dipilih
//         countryCodeSelect.addEventListener('change', function() {
//             const selectedCountry = countries.find(country => country.code === this.value);
//             if (selectedCountry) {
//                 countryFlag.src = selectedCountry.flag;
//             }
//         });

//         // Set bendera awal
//         countryFlag.src = countries[0].flag; // Bendera negara pertama



        function fillVisitorDetails() {
            if (document.getElementById('sameAsOrderer').checked) {
                document.getElementById('visitorFullName').value = document.getElementById('contactFullName').value;
                document.getElementById('visitorPhoneNumber').value = document.getElementById('contactPhoneNumber').value;
                document.getElementById('visitorEmail').value = document.getElementById('contactEmail').value;
                document.getElementById('visitorIdentity').value = document.getElementById('contactIdentity').value;
        
                // Set the identity type (Passport/NIK)
                if (document.getElementById('contactPassport').checked) {
                    document.getElementById('visitorPassport').checked = true;
                } else if (document.getElementById('contactNIK').checked) {
                    document.getElementById('visitorNIK').checked = true;
                }
            }
        }
        
        function addVisitorForm() {
            const visitorForms = document.getElementById('visitorForms');
            const newVisitorForm = visitorForms.children[0].cloneNode(true);
            visitorForms.appendChild(newVisitorForm);
        }

    
 // Fungsi untuk filter film berdasarkan genre dan menambah kelas active ke tombol yang dipilih
 function filterMovies(genre, button) {
    const movies = document.querySelectorAll('.movie-card');
    let isAnyMovieVisible = false;

    // Filter film berdasarkan genre
    movies.forEach(movie => {
      if (genre === 'all' || movie.getAttribute('data-genre') === genre) {
        movie.style.display = 'block'; // Tampilkan film yang sesuai genre
        isAnyMovieVisible = true;
      } else {
        movie.style.display = 'none'; // Sembunyikan film yang tidak sesuai genre
      }
    });

    // Tampilkan pesan "No result" jika tidak ada film yang sesuai
    const noResultMessage = document.getElementById('noResult');
    if (isAnyMovieVisible) {
      noResultMessage.classList.add('d-none'); // Sembunyikan pesan no result
    } else {
      noResultMessage.classList.remove('d-none'); // Tampilkan pesan no result
    }

    // Atur tombol yang aktif
    const activeButton = document.querySelector('.btn.active');
    if (activeButton) {
      activeButton.classList.remove('active'); // Hapus kelas aktif dari tombol sebelumnya
    }
    button.classList.add('active'); // Tambahkan kelas aktif ke tombol yang diklik
  }

  function setActive(element) {
    // Tambahkan kelas aktif saat mouse berada di atas item
    element.classList.add('active');
  }
  
  function removeActive(element) {
    // Hapus kelas aktif saat mouse meninggalkan item
    element.classList.remove('active');
  }


  // Dapatkan semua elemen dengan kelas 'selectable-badge'
// Dapatkan semua elemen dengan kelas 'selectable-badge'
const badges = document.querySelectorAll('.selectable-badge');

// Tambahkan event listener pada masing-masing badge
badges.forEach(badge => {
    badge.addEventListener('click', function() {
        // Hapus kelas 'bg-primary text-white' dari semua badge
        badges.forEach(b => {
            b.classList.remove('bg-primary', 'text-white');
            b.classList.add('bg-light', 'text-dark');  // Kembalikan ke warna awal
        });
        
        // Tambahkan kelas 'bg-primary text-white' ke badge yang diklik
        this.classList.remove('bg-light', 'text-dark');
        this.classList.add('bg-primary', 'text-white');
    });
});

// Event listener untuk memilih kursi
document.querySelectorAll('.seat.available').forEach(seat => {
  seat.addEventListener('click', function () {
      this.classList.toggle('your-choice');
  });
});



const ticketPrice = 30000; // Harga per tiket
let quantity = 2; // Jumlah tiket awal

// Fungsi untuk menghitung total harga
function updatePrice() {
    const total = ticketPrice * quantity;
    document.getElementById('ticket-count').textContent = `${quantity} Ticket x`;
    document.getElementById('ticket-price').textContent = `IDR. ${ticketPrice}`;
    document.getElementById('total-price').textContent = `IDR. ${total}`;
    document.getElementById('quantity').textContent = quantity;
}

// Event listener untuk tombol minus
document.getElementById('minus-button').addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        updatePrice();
    }
});

// Event listener untuk tombol plus
document.getElementById('plus-button').addEventListener('click', () => {
    quantity++;
    updatePrice();
});

// Inisialisasi harga saat halaman dimuat
updatePrice();
