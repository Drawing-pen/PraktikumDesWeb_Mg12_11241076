<template>
    <div class="overflow-hidden bg-krem py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pt-4 lg:pr-8">
            <div class="lg:max-w-lg">
                <p class="mt-2 text-2xl md:text-3xl font-bold tracking-tight font-meriweter text-pretty text-coklat border-b-2 border-coklat block w-full sm:text-5xl">
                    Contact Us
                </p>
                <p class="mt-6 text-xl md:text-xl text-coklat font-gupter">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </p>
              <dl class="mt-10 max-w-xl space-y-8 text-base/7 font-gupter text-coklat lg:max-w-none">
                <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                  <dt class="inline font-bold font-gupter text-coklat tetx-xl">
                    <span :class="feature.icon" class="absolute top-1 left-1 text-coklat text-xl" style="width: 20px; height: 20px;" aria-hidden="true"></span>
                    {{ feature.name }}
                  </dt>
                  {{ ' ' }}
                  <dd class="inline">{{ feature.description }}</dd>
                </div>
              </dl>
            </div>
          </div>
          <iframe class="rounded-lg"src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2820.6000848200606!2d116.86915594224719!3d-1.2084683554631415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1763023302590!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'MapsnInfo'
  }
  const features = [
    {
      name: 'Email: ',
      description: 'BookeryBakery@gmail.com',
      icon: 'icon-[ic--baseline-email]', 
    },
    {
      name: 'Phone: ',
      description: '021-1234567',
      icon: 'icon-[mingcute--phone-fill]', 
    },
    {
      name: 'Location:',
      description: 'Jl. MH Thamrin No. 10, Jakarta Pusat',
      icon: 'icon-[basil--location-solid]', 
    },
  ]
</script>