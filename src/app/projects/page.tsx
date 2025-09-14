import { MapPin, Calendar, Users, Truck } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Large-Scale Tractor Supply to Kenya",
      location: "Nairobi, Kenya",
      date: "2024",
      quantity: "50 Units",
      description: "Supplied 50 agricultural tractors to support large-scale farming operations in Kenya. The project included comprehensive training and maintenance support.",
      image: "/api/placeholder/600/400",
      category: "Tractors",
      status: "Completed",
      highlights: [
        "50 high-performance tractors delivered",
        "On-site training for 100+ operators",
        "2-year maintenance contract included",
        "Local parts distribution network established"
      ]
    },
    {
      id: 2,
      title: "Precision Planting Equipment for Brazil",
      location: "São Paulo, Brazil",
      date: "2023",
      quantity: "25 Units",
      description: "Delivered advanced precision planting equipment to modernize soybean farming operations in Brazil's agricultural heartland.",
      image: "/api/placeholder/600/400",
      category: "Seeders & Planters",
      status: "Completed",
      highlights: [
        "25 precision planters with GPS technology",
        "Increased planting efficiency by 40%",
        "Customized for local soil conditions",
        "Technical support team stationed locally"
      ]
    },
    {
      id: 3,
      title: "Sprayer Systems for Southeast Asia",
      location: "Vietnam & Thailand",
      date: "2023",
      quantity: "100 Units",
      description: "Large-scale deployment of modern sprayer systems across rice farming regions in Vietnam and Thailand to improve crop protection efficiency.",
      image: "/api/placeholder/600/400",
      category: "Sprayers",
      status: "Completed",
      highlights: [
        "100 knapsack sprayers delivered",
        "Training programs for 500+ farmers",
        "Reduced pesticide usage by 30%",
        "Improved crop yield by 25%"
      ]
    },
    {
      id: 4,
      title: "Harvesting Equipment for Argentina",
      location: "Buenos Aires, Argentina",
      date: "2024",
      quantity: "15 Units",
      description: "Supply of mini combine harvesters to support wheat and corn harvesting operations for medium-sized farms in Argentina.",
      image: "/api/placeholder/600/400",
      category: "Harvesters",
      status: "In Progress",
      highlights: [
        "15 mini combine harvesters",
        "Suitable for wheat and corn harvesting",
        "Delivery scheduled for Q2 2024",
        "Local service center partnership established"
      ]
    },
    {
      id: 5,
      title: "Farm Mechanization Project - Nigeria",
      location: "Lagos, Nigeria",
      date: "2022",
      quantity: "75 Units",
      description: "Comprehensive farm mechanization project including tractors, planters, and cultivation equipment to boost agricultural productivity.",
      image: "/api/placeholder/600/400",
      category: "Mixed Equipment",
      status: "Completed",
      highlights: [
        "30 tractors, 25 planters, 20 cultivators",
        "Farmer training and certification program",
        "Increased farm productivity by 60%",
        "Created 200+ job opportunities"
      ]
    },
    {
      id: 6,
      title: "Organic Farming Equipment - Peru",
      location: "Lima, Peru",
      date: "2024",
      quantity: "30 Units",
      description: "Specialized equipment for organic farming operations, including organic-certified seeders and cultivation tools.",
      image: "/api/placeholder/600/400",
      category: "Organic Equipment",
      status: "Planning",
      highlights: [
        "Organic-certified equipment",
        "Sustainable farming focus",
        "Environmental impact assessment",
        "Partnership with local organic farms"
      ]
    }
  ]

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: Calendar },
    { label: 'Countries Served', value: '30+', icon: MapPin },
    { label: 'Equipment Delivered', value: '10,000+', icon: Truck },
    { label: 'Farmers Trained', value: '5,000+', icon: Users },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Explore our successful agricultural machinery projects worldwide. From small farms to large-scale operations, we deliver solutions that transform farming.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how we&apos;ve helped farmers and agricultural businesses worldwide improve their operations with our quality machinery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-green-500 text-white' 
                        : project.status === 'In Progress'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-blue-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{project.date}</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <Truck className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{project.quantity}</span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    {project.highlights.length > 2 && (
                      <p className="text-sm text-gray-500 mt-2">
                        +{project.highlights.length - 2} more highlights
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you need a single machine or a complete agricultural solution, our team is ready to help you achieve your farming goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors duration-200">
              Get Project Quote
            </button>
            <button className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-500 hover:text-white transition-colors duration-200">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

