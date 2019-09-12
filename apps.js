vue.component('extractor', {
    template: '
    <div>
    <h1>Name Extractor</h1>
    <p>Name Extractor adalah program pengekstrak nama otomatis</p>
    <div>
        <input type="text" v-model="nama" placeholder="ketik nama lengkap anda" @keyup.enter="proses">
        <button @click='proses'>proses</button>
    </div>
    <h2 v-if='hasil'>
        Selamat datang Mr. / Mrs. {{akhir | capitalize}},
        Senang Anda dapat bergabung</h2>
        <b v-if='hasil'>Hasil ekstrak nama Anda :</b>
        <div v-if='hasil'>
            <p>nama depan : {{depan}}</p>
            <p>nama tengah : {{tengah}}</p>
            <p>nama akhir : {{akhir}}</p>
        </div>
    </div>
    ',
    data() {
        return {
            nama: '',
            depan: '',
            tengah: '',
            akhir: '',
            hasil: false
        };
    },
    methods: {
        proses() {
            var lengkap = this.nama.split(' ')
            this.depan = lengkap[0]
            for (i = 1; i < lengkap.length - 1; i++) {
                this.length += lengkap[i] + ' '
            }
            this.akhir = lengkap[lengkap.length - 1]
            this.hasil = true
        }   
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ' '
            value = value.toString()
            return value.chartAt(0).toUpperCase() + value.slice(1)
        }
    }
});
var app = new Vue({
    el: '#app'
})