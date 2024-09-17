<template>
    <div class="home">
        <!-- Section Navigation -->
        <nav class="navbar">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>

        <!-- Main Content -->
        <main>
        <h1>Welcome to My Vue.js Homepage</h1>
        <p>This is a simple homepage with navigation and a footer.</p>
        </main>

        <!-- Footer -->
        <footer class="footer">
        <p>&copy; 2024 My Vue.js Website. All rights reserved.</p>
        </footer>
    </div>
</template>

<script>
    export default {
    name: 'HomePage'
    }
</script>

<style scoped>
/* Styles for Navigation */
.navbar {
  background-color: #333;
  padding: 15px;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.navbar ul li {
  margin-right: 20px;
}

.navbar ul li a {
  color: white;
  text-decoration: none;
}

.navbar ul li a:hover {
  text-decoration: underline;
}

/* Styles for Main Content */
main {
  padding: 20px;
  text-align: center;
}

/* Styles for Footer */
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 15px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
