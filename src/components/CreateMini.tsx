import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import { Upload } from 'lucide-react';

const sizes = [
  { value: '20cm', label: '20cm', price: 'R$ 66,90' },
  { value: '30cm', label: '30cm', price: 'R$ 82,90' },
  { value: '50cm', label: '50cm', price: 'R$ 112,99' },
];

const CreateMini: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [images, setImages] = useState<File[]>([]);
  const [description, setDescription] = useState('');
  const [step, setStep] = useState(1);
  const [paymentLink, setPaymentLink] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Convert FileList to array
      const fileArray = Array.from(e.target.files);
      setImages(fileArray);
    }
  };

  const nextStep = () => {
    if (step === 1 && selectedSize) {
      setStep(2);
    }
  };

  // Calculate discount percentage based on quantity
  const calculateDiscountPercentage = (qty: number) => {
    if (qty === 1) return 0;
    if (qty === 2) return 5;
    if (qty === 3) return 10;
    if (qty === 4) return 15;
    if (qty === 5) return 20;
    if (qty >= 6) return 25;
    return 0;
  };

  // Calculate price for each quantity option
  const calculatePriceForQuantity = (qty: number) => {
    if (!selectedSize) return 0;
    
    let basePrice = 0;
    if (selectedSize === '20cm') {
      basePrice = 66.90;
    } else if (selectedSize === '30cm') {
      basePrice = 82.90;
    } else if (selectedSize === '50cm') {
      basePrice = 112.99;
    }
    
    const discount = calculateDiscountPercentage(qty);
    const discountMultiplier = (100 - discount) / 100;
    return basePrice * qty * discountMultiplier;
  };

  useEffect(() => {
    // Calculate price based on size and quantity with progressive discount
    if (selectedSize && quantity > 0) {
      let basePrice = 0;
      
      if (selectedSize === '20cm') {
        basePrice = 66.90;
      } else if (selectedSize === '30cm') {
        basePrice = 82.90;
      } else if (selectedSize === '50cm') {
        basePrice = 112.99;
      }
      
      const discount = calculateDiscountPercentage(quantity);
      setDiscountPercentage(discount);
      
      const discountMultiplier = (100 - discount) / 100;
      const finalPrice = basePrice * quantity * discountMultiplier;
      
      setTotalPrice(finalPrice);
      
      // Dynamic WhatsApp link
      const whatsappUrl = `https://wa.me/5511987918168?text=Eu%20quero%20${quantity}%20MeuMini%20de%20${selectedSize}`;
      setPaymentLink(whatsappUrl);
    }
  }, [selectedSize, quantity]);

  const isFormValid = selectedSize && images.length > 0 && description.trim().length > 10;

  return (
    <section className="py-16 bg-gray-900" id="criar">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-xl p-8 card-shadow">
          <h2 className="text-3xl font-bold text-center mb-8">
            MeuMini em 3 Passos
          </h2>
          
          <div className="flex justify-between mb-8">
            <div className={`step-indicator relative flex items-center justify-center ${step >= 1 ? 'text-white' : 'text-gray-500'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-meumini-orange' : 'bg-gray-700'}`}>1</div>
              <span className="absolute -bottom-6 whitespace-nowrap">Escolher tamanho</span>
            </div>
            <div className="grow mx-4 pt-5">
              <div className={`h-1 ${step >= 2 ? 'bg-meumini-orange' : 'bg-gray-700'}`}></div>
            </div>
            <div className={`step-indicator relative flex items-center justify-center ${step >= 2 ? 'text-white' : 'text-gray-500'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-meumini-orange' : 'bg-gray-700'}`}>2</div>
              <span className="absolute -bottom-6 whitespace-nowrap">Personalizar</span>
            </div>
            <div className="grow mx-4 pt-5">
              <div className={`h-1 ${step >= 3 ? 'bg-meumini-orange' : 'bg-gray-700'}`}></div>
            </div>
            <div className={`step-indicator relative flex items-center justify-center ${step >= 3 ? 'text-white' : 'text-gray-500'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-meumini-orange' : 'bg-gray-700'}`}>3</div>
              <span className="absolute -bottom-6 whitespace-nowrap">Finalizar</span>
            </div>
          </div>
          
          <div className="mt-16">
            {step === 1 && (
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-6">Escolha o tamanho ideal para o seu MeuMini</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {sizes.map((size) => (
                    <div
                      key={size.value}
                      className={`cursor-pointer ${selectedSize === size.value ? 'ring-2 ring-meumini-orange' : ''}`}
                    >
                      <Toggle
                        pressed={selectedSize === size.value}
                        onPressedChange={() => setSelectedSize(size.value)}
                        className="w-full h-32 flex flex-col items-center justify-center rounded-lg border border-gray-700"
                      >
                        <span className="text-2xl font-bold">{size.label}</span>
                        <span className="text-meumini-orange mt-2">{size.price}</span>
                      </Toggle>
                    </div>
                  ))}
                </div>

                {selectedSize && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Escolha a quantidade</h3>
                    
                    {/* Updated quantity selector with visual options and prices */}
                    <div className="space-y-2 bg-gray-900 p-4 rounded-lg">
                      {[1, 2, 3, 4, 5, 6].map((qty) => {
                        const price = calculatePriceForQuantity(qty);
                        const discount = calculateDiscountPercentage(qty);
                        
                        return (
                          <div 
                            key={qty}
                            onClick={() => setQuantity(qty)}
                            className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-all ${
                              quantity === qty 
                                ? 'bg-meumini-orange text-white' 
                                : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                          >
                            <div className="flex items-center">
                              <span className="text-lg font-medium">{qty} {qty === 1 ? 'unidade' : 'unidades'}</span>
                              {discount > 0 && (
                                <span className="ml-2 text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                                  {discount}% OFF
                                </span>
                              )}
                            </div>
                            <span className="font-bold">
                              R$ {price.toFixed(2).replace('.', ',')}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="text-center mt-4 bg-gray-900 p-4 rounded-lg">
                      <div className="border-t border-gray-700 my-2 pt-2"></div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg text-white">Total:</span>
                        <span className="text-xl font-bold text-meumini-orange">
                          R$ {totalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-end">
                  <Button 
                    onClick={nextStep} 
                    className="button-gradient"
                    disabled={!selectedSize}
                  >
                    Próximo
                  </Button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-6 text-white">Personalize seu MeuMini</h3>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="file-upload" className="block mb-2 text-white">
                      Envie fotos de referência (você pode enviar mais de 01 foto)
                    </Label>
                    <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                      {images.length > 0 ? (
                        <div className="flex flex-col items-center">
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 w-full">
                            {images.map((img, index) => (
                              <div key={index} className="relative aspect-square">
                                <img 
                                  src={URL.createObjectURL(img)}
                                  alt={`Preview ${index + 1}`}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              </div>
                            ))}
                          </div>
                          
                          <p className="text-sm text-meumini-light-gray mt-4">
                            Estas são as fotos que você enviou para referência.
                          </p>
                          
                          <label 
                            htmlFor="file-upload" 
                            className="mt-4 cursor-pointer inline-flex items-center justify-center px-4 py-2 rounded-md bg-meumini-orange hover:bg-meumini-orange/90 text-white transition-all hover:shadow-[0_0_10px_rgba(255,111,0,0.6)]"
                          >
                            Trocar imagens
                          </label>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <Upload className="h-12 w-12 text-gray-500 mb-4" />
                          <p className="text-sm text-meumini-light-gray mb-4">
                            Arraste suas imagens ou clique para fazer o upload
                          </p>
                          
                          <label 
                            htmlFor="file-upload" 
                            className="cursor-pointer inline-flex items-center justify-center px-4 py-2 rounded-md bg-meumini-orange hover:bg-meumini-orange/90 text-white transition-all hover:shadow-[0_0_10px_rgba(255,111,0,0.6)]"
                          >
                            Escolher arquivo
                          </label>
                        </div>
                      )}
                      
                      <input
                        id="file-upload"
                        type="file"
                        onChange={handleImageChange}
                        accept="image/jpeg, image/png"
                        multiple
                        className="hidden"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="description" className="block mb-2 text-white">Descrição personalizada</Label>
                    <Textarea
                      id="description"
                      placeholder="Descreva como você gostaria que sua miniatura fosse. Inclua detalhes importantes como cores, posição, elementos adicionais, etc."
                      className="h-32 bg-gray-700 text-white border-gray-600 focus:border-meumini-orange"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <p className="mt-2 text-xs text-meumini-light-gray">
                      {description.length}/300 caracteres. Mínimo de 10 caracteres.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button 
                    onClick={() => setStep(1)} 
                    variant="outline"
                    className="text-black bg-white hover:bg-gray-200 border-gray-300"
                  >
                    Voltar
                  </Button>
                  <Button 
                    className="button-gradient"
                    disabled={images.length === 0 || description.trim().length < 10}
                    onClick={() => setStep(3)}
                  >
                    Revisar
                  </Button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-6">Finalize seu pedido</h3>
                
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold mb-4">Resumo do pedido</h4>
                  <div className="space-y-2 text-meumini-light-gray">
                    <p><span className="font-medium text-white">Tamanho:</span> {selectedSize}</p>
                    <p><span className="font-medium text-white">Quantidade:</span> {quantity} {quantity > 1 ? 'unidades' : 'unidade'}</p>
                    <p><span className="font-medium text-white">Imagens enviadas:</span> {images.length}</p>
                    <p><span className="font-medium text-white">Descrição:</span> {description}</p>
                  </div>
                  
                  <div className="border-t border-gray-700 mt-4 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-meumini-light-gray">Preço unitário:</span>
                      <span className="text-white">
                        {selectedSize === '20cm' ? 'R$ 66,90' : 
                        selectedSize === '30cm' ? 'R$ 82,90' : 
                        'R$ 112,99'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-meumini-light-gray">Quantidade:</span>
                      <span className="text-white">{quantity} un.</span>
                    </div>
                    {discountPercentage > 0 && (
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-meumini-light-gray">Desconto:</span>
                        <span className="text-meumini-orange">{discountPercentage}%</span>
                      </div>
                    )}
                    <div className="border-t border-gray-700 my-2 pt-2"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Total</span>
                      <span className="text-xl font-bold text-meumini-orange">
                        R$ {totalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-meumini-light-gray mt-1">
                      <span>Tempo de produção</span>
                      <span>1-2 dias úteis</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    onClick={() => setStep(2)} 
                    variant="outline"
                    className="text-black bg-white hover:bg-gray-200 border-gray-300"
                  >
                    Voltar
                  </Button>
                  {isFormValid && (
                    <a 
                      href={paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        className="button-gradient"
                      >
                        Comprar Agora
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateMini;
