<template>
<div class="container">
  <banner title="Vue Is Cool" subtitle="Get'er done!" v-bind:clickHandler="clickHandler"></banner>

  <div class="row">
    <div class="col-sm-4">
      <big-icon icon="user" />
      <p>
        Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Vestibulum tortor quam,
        feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
        libero sit amet quam egestas semper. Aenean ultricies mi vitae
        est. Mauris placerat eleifend leo.
      </p>
    </div>

    <div class="col-sm-4">
      <big-icon icon="heart" />
      <p>
        Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Vestibulum tortor quam,
        feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
        libero sit amet quam egestas semper. Aenean ultricies mi vitae
        est. Mauris placerat eleifend leo.
      </p>
    </div>

    <div class="col-sm-4">
      <big-icon icon="star" />
      <p>
        Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Vestibulum tortor quam,
        feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
        libero sit amet quam egestas semper. Aenean ultricies mi vitae
        est. Mauris placerat eleifend leo.
      </p>
    </div>
  </div>

  <div class="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Modal title</h4>
        </div>
        <div class="modal-body">
          <h2>I got clicked!</h2>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import banner from '../banner'
import bigIcon from '../big-icon'

export default {
  methods: {
    clickHandler() {
      window.jQuery('#myModal').modal('show')
    }  
  },
  
  components: {
    'banner': banner,
    'big-icon': bigIcon
  }
}
</script>